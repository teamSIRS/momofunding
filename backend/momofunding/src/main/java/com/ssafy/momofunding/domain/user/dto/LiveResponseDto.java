package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class LiveResponseDto {

    private Boolean isExist;

    @Builder
    public LiveResponseDto(Boolean isNicknameExist){
        this.isExist = isNicknameExist;
    }
}
