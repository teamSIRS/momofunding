package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RewardPayRequestDto {

    private String name;// 리워드의 이름
    private String content; // 리워드의 내용
    private Integer quantity;// 리워드 수량
    private Integer amount; // 금액

    public RewardPayRequestDto(String name, String content, Integer quantity, Integer amount) {
        this.name = name;
        this.content = content;
        this.quantity = quantity;
        this.amount = amount;
    }
}
