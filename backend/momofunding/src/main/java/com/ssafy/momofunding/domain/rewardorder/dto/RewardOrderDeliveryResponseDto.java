package com.ssafy.momofunding.domain.rewardorder.dto;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardOrderDeliveryResponseDto {
    private Long id;
    private String recipientName;
    private String recipientTel;
    private String recipientAddress;
    private String requestContent;

    public RewardOrderDeliveryResponseDto(RewardOrder rewardOrder){
        this.id = rewardOrder.getId();
        this.recipientName = rewardOrder.getRecipientName();
        this.recipientTel = rewardOrder.getRecipientTel();
        this.recipientAddress = rewardOrder.getRecipientAddress();
        this.requestContent = rewardOrder.getRequestContent();
    }
}
