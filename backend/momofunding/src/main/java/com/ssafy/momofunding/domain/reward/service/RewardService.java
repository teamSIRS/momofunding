package com.ssafy.momofunding.domain.reward.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.dto.RewardGetListResponseDto;
import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.repository.RewardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RewardService {

    private final RewardRepository rewardRepository;
    private final ProjectRepository projectRepository;

    public void createReward(RewardSaveRequestDto rewardSaveRequestDto) {
        Long projectId = rewardSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        Reward reward = rewardSaveRequestDto.toEntity();
        reward.mapProject(project);
        rewardRepository.save(reward);
    }

    public List<RewardGetListResponseDto> getRewardListByProject(Long projectId) {
        projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        List<Reward> rewards = rewardRepository.findAllByProjectId(projectId);

        return rewards.stream()
                .map(RewardGetListResponseDto::new)
                .collect(Collectors.toList());
    }

    public void updateReward(Long rewardId, RewardSaveRequestDto rewardSaveRequestDto){
        Long projectId = rewardSaveRequestDto.getProjectId();
        projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        Reward reward = rewardRepository.findById(rewardId)
                        .orElseThrow(()-> new IllegalArgumentException("잘못된 리워드 번호입니다:: rewardId-"+rewardId));

        reward.updateReward(rewardSaveRequestDto);
        rewardRepository.save(reward);
    }
}
