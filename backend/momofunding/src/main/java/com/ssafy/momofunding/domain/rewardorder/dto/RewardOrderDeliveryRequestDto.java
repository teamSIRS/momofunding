package com.ssafy.momofunding.domain.rewardorder.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardOrderDeliveryRequestDto {
    private String recipientName;
    private String recipientTel;
    private String recipientAddress;
    private String requestContent;

    @Builder
    public RewardOrderDeliveryRequestDto(String recipientName, String recipientTel,
                                         String recipientAddress, String requestContent){
        this.recipientName = recipientName;
        this.recipientTel = recipientTel;
        this.recipientAddress = recipientAddress;
        this.requestContent = requestContent;
    }
}
