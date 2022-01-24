package com.ssafy.momofunding.domain.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import lombok.Builder;

@Getter
@NoArgsConstructor
public class UserInfoUpdateRequestDto {
    private String password;
    private String nickname;

//    @Builder
//    public UserInfoUpdateRequestDto(String email, String password, String nickname) {
//        this.email = email;
//        this.password = password;
//        this.nickname = nickname;
//    }

}
