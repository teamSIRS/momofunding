package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@NoArgsConstructor
@Setter
@Getter
public class RewardUpdateRequestDto {

    private Long id;
    private String name;
    private Integer price;
    private String content;
    private String optionDescription;
    private Boolean isDeliver;
    private Integer limitedQuantity;
    private Timestamp deliverStartDate;

    @Builder
    public RewardUpdateRequestDto(Long id, String name, Integer price, String content, String optionDescription,
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

    public Reward toEntity(){
        return Reward.builder()
                .id(id)
                .name(name)
                .price(price)
                .content(content)
                .optionDescription(optionDescription)
                .isDeliver(isDeliver)
                .limitedQuantity(limitedQuantity)
                .deliverStartDate(deliverStartDate)
                .build();
    }

}
