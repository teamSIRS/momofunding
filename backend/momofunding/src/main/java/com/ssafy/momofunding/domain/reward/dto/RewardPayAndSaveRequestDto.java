package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardPayAndSaveRequestDto {
    private Long rewardId;//리워드의 id
    private Long userId;//유저의 id
    private Long projectId;//프로젝트의 id

    private String name;// 리워드의 이름
    private String content; // 리워드의 내용

    private Integer quantity;// 리워드 수량

    private String optionContent; // 리워드 옵션 내용
    private String recipientName; // 수령인 이름
    private String recipientTel; // 수령인 전화번호
    private String recipientAddress; // 수령인 주소
    private String requestContent; // 요청사항

    private Integer amount; // 금액

    @Builder
    public RewardPayAndSaveRequestDto(Long rewardId, Long userId, Long projectId, String name, String content, Integer quantity, String optionContent, String recipientName, String recipientTel, String recipientAddress, String requestContent, Integer amount) {
        this.rewardId = rewardId;
        this.userId = userId;
        this.projectId = projectId;
        this.name = name;
        this.content = content;
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
