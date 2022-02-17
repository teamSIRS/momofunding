package com.ssafy.momofunding.domain.rewardorder.dto;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardOrderPurchaseResponseDto {
    private Long id;
    private Integer quantity;
    private Integer amount;
    private String recipientName;
    private String recipientTel;
    private String recipientAddress;
    private String requestContent;

    private String rewardName;

    @Builder
    public RewardOrderPurchaseResponseDto(Long id, Integer quantity, Integer amount,
                                          String recipientName, String recipientTel, String recipientAddress,
                                          String requestContent, String rewardName) {
        this.id = id;
        this.quantity = quantity;
        this.amount = amount;
        this.recipientName = recipientName;
        this.recipientTel = recipientTel;
        this.recipientAddress = recipientAddress;
        this.requestContent = requestContent;

        this.rewardName = rewardName;
    }

    public RewardOrderPurchaseResponseDto(RewardOrder rewardOrder){
        this.id = rewardOrder.getId();
        this.quantity = rewardOrder.getQuantity();
        this.amount = rewardOrder.getAmount();
        this.recipientName = rewardOrder.getRecipientName();
        this.recipientTel = rewardOrder.getRecipientTel();
        this.recipientAddress = rewardOrder.getRecipientAddress();
        this.requestContent = rewardOrder.getRequestContent();

        this.rewardName = rewardOrder.getReward().getName();
    }
}
