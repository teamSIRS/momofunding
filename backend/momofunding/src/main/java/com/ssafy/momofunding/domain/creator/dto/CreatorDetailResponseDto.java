package com.ssafy.momofunding.domain.creator.dto;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class CreatorDetailResponseDto {

    private Long id;
    private String creatorName;
    private String creatorImageUrl;
    private String creatorContent;
    private String email;
    private String tel;
    private String account;

    @Builder
    public CreatorDetailResponseDto(Long id, String creatorName, String creatorImageUrl, String creatorContent,
                                    String email, String tel, String account){
        this.id = id;
        this.creatorName = creatorName;
        this.creatorImageUrl = creatorImageUrl;
        this.creatorContent = creatorContent;
        this.email = email;
        this.tel = tel;
        this.account = account;
    }

    public CreatorDetailResponseDto(Creator creatorEntity) {
        this.id = creatorEntity.getId();
        this.creatorName = creatorEntity.getCreatorName();
        this.creatorImageUrl = creatorEntity.getCreatorImageUrl();
        this.creatorContent = creatorEntity.getCreatorContent();
        this.email = creatorEntity.getEmail();
        this.tel = creatorEntity.getTel();
        this.account = creatorEntity.getAccount();
    }
}
