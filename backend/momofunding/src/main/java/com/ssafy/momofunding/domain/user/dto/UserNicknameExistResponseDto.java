package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class UserNicknameExistResponseDto {

    private Boolean isExist;

    @Builder
    public UserNicknameExistResponseDto(Boolean isNicknameExist){
        this.isExist = isNicknameExist;
    }
}
