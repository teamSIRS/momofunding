package com.ssafy.momofunding.domain.rewardorder.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.repository.RewardRepository;
import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderSaveRequestDto;
import com.ssafy.momofunding.domain.rewardorder.repository.RewardOrderRepository;
import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class RewardOrderService {

    private final RewardOrderRepository rewardOrderRepository;
    private final RewardRepository rewardRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    
    @Transactional
    public Long saveRewardOrder(RewardOrderSaveRequestDto rewardOrderSaveRequestDto) {
        Long rewardId = rewardOrderSaveRequestDto.getRewardId();
        Reward reward = rewardRepository.findById(rewardId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 리워드 번호입니다:: rewardId-"+rewardId));

        Long userId = rewardOrderSaveRequestDto.getUserId();
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호입니다::userId-"+userId));

        Long projectId = rewardOrderSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다::projectId-"+projectId));

        RewardOrder rewardOrder = rewardOrderSaveRequestDto.toEntity();
        rewardOrder.mapReward(reward);
        rewardOrder.mapUser(user);
        rewardOrder.mapProject(project);

        return rewardOrderRepository.save(rewardOrder).getId();
    }
}
