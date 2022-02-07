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
    private String optionContent;
    private Integer amount;

    private RewardSimpleResponseDto rewardSimpleResponseDto;

    @Builder
    public RewardOrderResponseDto(Long id, Integer quantity, String optionContent, Integer amount, Reward reward){
        this.id = id;
        this.quantity = quantity;
        this.optionContent = optionContent;
        this.amount = amount;

        this.rewardSimpleResponseDto = new RewardSimpleResponseDto(reward);
    }

    public RewardOrderResponseDto(RewardOrder rewardOrder){
        this.id = rewardOrder.getId();
        this.quantity = rewardOrder.getQuantity();
        this.optionContent = rewardOrder.getOptionContent();
        this.amount = rewardOrder.getAmount();

        this.rewardSimpleResponseDto = new RewardSimpleResponseDto(rewardOrder.getReward());
    }

}
