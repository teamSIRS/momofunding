package com.ssafy.momofunding.domain.reward.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.repository.RewardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RewardService {

    private final RewardRepository rewardRepository;
    private final ProjectRepository projectRepository;

    public void createReward(Long projectId, RewardSaveRequestDto rewardSaveRequestDto) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        Reward reward = rewardSaveRequestDto.toEntity();
        reward.mapProject(project);
        rewardRepository.save(reward);
    }
}
