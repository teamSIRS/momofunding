package com.ssafy.momofunding.domain.reward.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.dto.RewardResponseDto;
import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.dto.RewardUpdateRequestDto;
import com.ssafy.momofunding.domain.reward.repository.RewardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RewardService {

    private final RewardRepository rewardRepository;
    private final ProjectRepository projectRepository;

    @Transactional
    public Long saveReward(RewardSaveRequestDto rewardSaveRequestDto) {
        Long projectId = rewardSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        Reward reward = rewardSaveRequestDto.toEntity();
        reward.mapProject(project);
        return rewardRepository.save(reward).getId();
    }

    @Transactional
    public List<RewardResponseDto> findRewardListByProject(Long projectId) {
        projectRepository.findById(projectId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-" + projectId));

        List<Reward> rewards = rewardRepository.findAllByProjectId(projectId);

        return rewards.stream()
                .map(RewardResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void updateReward(Long rewardId, RewardUpdateRequestDto rewardUpdateRequestDto){
        Reward reward = rewardRepository.findById(rewardId)
                        .orElseThrow(()-> new IllegalArgumentException("잘못된 리워드 번호입니다:: rewardId-"+rewardId));

        reward.updateReward(rewardUpdateRequestDto);
    }

    @Transactional
    public void deleteReward(Long rewardId) {
        rewardRepository.deleteById(rewardId);
    }

    @Transactional
    public RewardResponseDto findRewardById(Long rewardId) {
        Reward reward = rewardRepository.findById(rewardId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 리워드 번호입니다:: rewardId-"+rewardId));
        return new RewardResponseDto(reward);
    }
}
