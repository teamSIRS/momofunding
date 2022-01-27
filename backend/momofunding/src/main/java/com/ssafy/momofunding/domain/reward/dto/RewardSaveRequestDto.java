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
public class RewardSaveRequestDto {

    private Long projectId;
    private String name;
    private Integer price;
    private String content;
    private String optionDescription;
    private Boolean isDeliver;
    private Integer limitedQuantity;
    private Timestamp deliverStartDate;
    private Timestamp registerDate;

    @Builder
    public RewardSaveRequestDto(Long projectId, String name, Integer price, String content, String optionDescription,
                                Boolean isDeliver, Integer limitedQuantity, Timestamp deliverStartDate, Timestamp registerDate){
        this.projectId = projectId;
        this.name = name;
        this.price = price;
        this.content = content;
        this.optionDescription = optionDescription;
        this.isDeliver = isDeliver;
        this.limitedQuantity = limitedQuantity;
        this.deliverStartDate = deliverStartDate;
        this.registerDate = registerDate;
    }

    public Reward toEntity(){
        return Reward.builder()
                .name(name)
                .price(price)
                .content(content)
                .optionDescription(optionDescription)
                .isDeliver(isDeliver)
                .limitedQuantity(limitedQuantity)
                .deliverStartDate(deliverStartDate)
                .registerDate(registerDate)
                .build();
    }

}
