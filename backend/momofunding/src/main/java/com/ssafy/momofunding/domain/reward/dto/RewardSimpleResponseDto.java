package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardSimpleResponseDto {
    private Long rewardId;
    private Long projectId;
    private String name;

    public RewardSimpleResponseDto(Reward reward){
        this.rewardId = reward.getId();
        this.projectId = reward.getProject().getId();
        this.name = reward.getName();
    }
}
