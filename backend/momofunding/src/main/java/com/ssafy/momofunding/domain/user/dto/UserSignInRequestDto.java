package com.ssafy.momofunding.domain.user.dto;

import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;

public class UserSignInRequestDto {
    private String email;
    private String password;



    @Builder
    public UserSignInRequestDto(String email, String password){
        this.email = email;
        this.password = password;
    }

    public User toEntity(){
        return User.builder()
                .email(email)
                .password(password)
                .build();
    }

}
