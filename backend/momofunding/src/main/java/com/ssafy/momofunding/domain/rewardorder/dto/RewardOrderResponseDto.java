package com.ssafy.momofunding.domain.rewardorder.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.reward.dto.RewardSimpleResponseDto;
import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardOrderResponseDto {
    private Long id;
    private Integer quantity;
    private Integer amount;

    private RewardSimpleResponseDto rewardSimple;

    @Builder
    public RewardOrderResponseDto(Long id, Integer quantity, Integer amount, Reward reward){
        this.id = id;
        this.quantity = quantity;
        this.amount = amount;
        this.rewardSimple = new RewardSimpleResponseDto(reward);
    }

    public RewardOrderResponseDto(RewardOrder rewardOrder){
        this.id = rewardOrder.getId();
        this.quantity = rewardOrder.getQuantity();
        this.amount = rewardOrder.getAmount();
        this.rewardSimple = new RewardSimpleResponseDto(rewardOrder.getReward());
    }

}
