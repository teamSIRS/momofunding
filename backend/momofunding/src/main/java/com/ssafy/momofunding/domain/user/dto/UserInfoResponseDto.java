package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class UserInfoResponseDto {

    private String email;
    private String password;
    private String nickname;
    private Timestamp registerDate;

    @Builder
    public UserInfoResponseDto(String email, String password, String nickname, Timestamp registerDate) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.registerDate = registerDate;
    }

}
