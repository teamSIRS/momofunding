package com.ssafy.momofunding.domain.user.dto;

import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserSignInResponseDto {

    private Long id;
    private String role;
    private String nickname;
    private String token;

    @Builder
    public UserSignInResponseDto(Long id, String role, String nickname) {
        this.id = id;
        this.role = role;
        this.nickname = nickname;
    }

    public UserSignInResponseDto(User user){
        this.id = user.getId();
        this.role = user.getRole();
        this.nickname = user.getNickname();
    }


}
