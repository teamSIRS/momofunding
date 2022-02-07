package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardSimpleResponseDto {
    private Long id;
    private Long projectId;
    private String name;

    public RewardSimpleResponseDto(Reward reward){
        this.id = reward.getId();
        if(reward.getProject() != null)
            this.projectId = reward.getProject().getId();
        this.name = reward.getName();
    }
}
