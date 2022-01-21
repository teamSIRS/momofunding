package com.ssafy.momofunding.domain.user.dto;

import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;

public class UserSignUpRequestDto {

    private String email;
    private String password;
    private String nickname;
    private String role;


    @Builder
    public UserSignUpRequestDto(String email, String password, String nickname, String role){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.role = role;
    }

    public User toEntity(){
        return User.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .role(role)
                .build();
    }


}
