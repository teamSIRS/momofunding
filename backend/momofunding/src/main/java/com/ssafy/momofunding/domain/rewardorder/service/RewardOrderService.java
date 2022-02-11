package com.ssafy.momofunding.domain.rewardorder.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.dto.RewardPayAndSaveRequestDto;
import com.ssafy.momofunding.domain.reward.repository.RewardRepository;
import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import com.ssafy.momofunding.domain.rewardorder.dto.*;
import com.ssafy.momofunding.domain.rewardorder.repository.RewardOrderRepository;
import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RewardOrderService {

    private final RewardOrderRepository rewardOrderRepository;
    private final RewardRepository rewardRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    
    @Transactional
    public Long saveRewardOrder(RewardPayAndSaveRequestDto rewardPayAndSaveRequestDto) {
        Long rewardId = rewardPayAndSaveRequestDto.getRewardId();
        Reward reward = rewardRepository.findById(rewardId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 리워드 번호입니다:: rewardId-"+rewardId));

        Long userId = rewardPayAndSaveRequestDto.getUserId();
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호입니다::userId-"+userId));

        Long projectId = rewardPayAndSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다::projectId-"+projectId));

        project.addCurrentAmount(rewardPayAndSaveRequestDto.getAmount());
        reward.deleteLimitedQuantity(rewardPayAndSaveRequestDto.getQuantity());

        RewardOrder rewardOrder = rewardPayAndSaveRequestDto.toEntity();
        rewardOrder.mapReward(reward);
        rewardOrder.mapUser(user);
        rewardOrder.mapProject(project);

        return rewardOrderRepository.save(rewardOrder).getId();
    }

    @Transactional
    public List<RewardOrderResponseDto> findOrdersByUserId(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호 입니다::userId-"+userId));

        List<RewardOrder> rewardOrders = rewardOrderRepository.findAllByUserId(userId);

        return rewardOrders.stream()
                .map(RewardOrderResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public RewardOrderDeliveryResponseDto findOrderById(Long rewardOrderId) {
        RewardOrder rewardOrder = rewardOrderRepository.findById(rewardOrderId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 주문 번호 입니다::rewardOrderId-"+rewardOrderId));

        return new RewardOrderDeliveryResponseDto(rewardOrder);
    }

    @Transactional
    public void updateOrderDeliveryInfo(Long rewardOrderId, RewardOrderDeliveryRequestDto rewardOrderDeliveryRequestDto) {
        RewardOrder rewardOrder = rewardOrderRepository.findById(rewardOrderId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 주문 번호 입니다::rewardOrderId-"+rewardOrderId));

        rewardOrder.updateDeliveryInfo(rewardOrderDeliveryRequestDto);
    }

    @Transactional
    public List<RewardOrderPurchaseResponseDto> findOrdersByProjectId(Long projectId) {
        projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호 입니다:: projectId-"+projectId));

        List<RewardOrder> rewardOrders = rewardOrderRepository.findAllByProjectId(projectId);

        return rewardOrders.stream()
                .map(RewardOrderPurchaseResponseDto::new)
                .collect(Collectors.toList());
    }
}
