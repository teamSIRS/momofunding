package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserPasswordResetRequestDto {
    private String jwt;
    private String password;

    @Builder
    public UserPasswordResetRequestDto(String jwt, String password) {
        this.jwt = jwt;
        this.password = password;
    }
}
