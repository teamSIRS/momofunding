package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserInfoUpdateRequestDto {
    private String password;
    private String nickname;

    @Builder
    public UserInfoUpdateRequestDto(String password, String nickname) {
        this.password = password;
        this.nickname = nickname;
    }

}
