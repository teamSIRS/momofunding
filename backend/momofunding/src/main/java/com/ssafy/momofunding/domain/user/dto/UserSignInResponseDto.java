package com.ssafy.momofunding.domain.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserSignInResponseDto {

    private Long Userid;

    //JWT토큰이 어디선가 들어가지 않을까...


    public UserSignInResponseDto(Long userid) {
        Userid = userid;
    }
}
