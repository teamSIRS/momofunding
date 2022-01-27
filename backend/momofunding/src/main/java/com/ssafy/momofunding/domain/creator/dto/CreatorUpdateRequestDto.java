package com.ssafy.momofunding.domain.creator.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class CreatorUpdateRequestDto {

    private String creatorName;
    private String creatorImageUrl;
    private String creatorContent;
    private String email;
    private String tel;
    private String account;

    @Builder
    public CreatorUpdateRequestDto(String creatorName, String creatorImageUrl, String creatorContent,
                                       String email, String tel, String account){
        this.creatorName = creatorName;
        this.creatorImageUrl = creatorImageUrl;
        this.creatorContent = creatorContent;
        this.email = email;
        this.tel = tel;
        this.account = account;
    }
}
