package com.ssafy.momofunding.domain.user.dto;

import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserInfoResponseDto {

    private String email;
    private String password;
    private String nickname;
    private LocalDateTime registerTime;

    @Builder
    public UserInfoResponseDto(String email, String password, String nickname, LocalDateTime registerDate) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.registerTime = registerDate;
    }

    public UserInfoResponseDto(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.nickname = user.getNickname();
        this.registerTime = user.getRegisterTime();
    }


}
