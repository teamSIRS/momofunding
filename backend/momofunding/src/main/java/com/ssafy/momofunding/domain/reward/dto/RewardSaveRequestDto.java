package com.ssafy.momofunding.domain.reward.dto;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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
    private LocalDateTime deliverStartDate;

    @Builder
    public RewardSaveRequestDto(Long projectId, String name, Integer price, String content, String optionDescription,
                                Boolean isDeliver, Integer limitedQuantity, LocalDateTime deliverStartDate){
        this.projectId = projectId;
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
