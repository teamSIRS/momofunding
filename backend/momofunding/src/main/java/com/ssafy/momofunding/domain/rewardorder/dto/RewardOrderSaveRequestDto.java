package com.ssafy.momofunding.domain.rewardorder.dto;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class RewardOrderSaveRequestDto {

    private Long rewardId;
    private Long userId;
    private Long projectId;
    private Integer quantity;
    private String optionContent;
    private String recipientName;
    private String recipientTel;
    private String recipientAddress;
    private String requestContent;
    private Integer amount;

    @Builder
    public RewardOrderSaveRequestDto(Long rewardId, Long userId, Long projectId, Integer quantity, String optionContent,
                       String recipientName, String recipientTel, String recipientAddress,
                       String requestContent, Integer amount){
        this.rewardId = rewardId;
        this.userId = userId;
        this.projectId = projectId;
        this.quantity = quantity;
        this.optionContent = optionContent;
        this.recipientName = recipientName;
        this.recipientTel = recipientTel;
        this.recipientAddress = recipientAddress;
        this.requestContent = requestContent;
        this.amount = amount;
    }

    public RewardOrder toEntity(){
        return RewardOrder.builder()
                .quantity(quantity)
                .optionContent(optionContent)
                .recipientName(recipientName)
                .recipientTel(recipientTel)
                .recipientAddress(recipientAddress)
                .requestContent(requestContent)
                .amount(amount)
                .build();
    }
}
