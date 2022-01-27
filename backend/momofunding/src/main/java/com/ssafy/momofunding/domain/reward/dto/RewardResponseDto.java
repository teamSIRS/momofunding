package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@Getter
public class RewardResponseDto {

    private Long id;
    private String name;
    private Integer price;
    private String content;
    private String optionDescription;
    private Boolean isDeliver;
    private Integer limitedQuantity;
    private Timestamp deliverStartDate;

    @Builder
    public RewardResponseDto(Long id, String name, Integer price, String content, String optionDescription,
                             Boolean isDeliver, Integer limitedQuantity, Timestamp deliverStartDate){
        this.id = id;
        this.name = name;
        this.price = price;
        this.content = content;
        this.optionDescription = optionDescription;
        this.isDeliver = isDeliver;
        this.limitedQuantity = limitedQuantity;
        this.deliverStartDate = deliverStartDate;
    }

    public RewardResponseDto(Reward reward){
        this.id = reward.getId();
        this.name = reward.getName();
        this.price = reward.getPrice();
        this.content = reward.getContent();
        this.optionDescription = reward.getOptionDescription();
        this.isDeliver = reward.getIsDeliver();
        this.limitedQuantity = reward.getLimitedQuantity();
        this.deliverStartDate = reward.getDeliverStartDate();
    }
}
