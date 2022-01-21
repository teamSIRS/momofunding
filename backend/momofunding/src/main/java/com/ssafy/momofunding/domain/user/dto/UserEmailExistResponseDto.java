package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserEmailExistResponseDto {

    private Boolean isExist;

    @Builder
    public UserEmailExistResponseDto(Boolean isEmailExist){
        this.isExist = isEmailExist;
    }
}
