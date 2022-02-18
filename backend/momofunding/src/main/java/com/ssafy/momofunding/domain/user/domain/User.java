package com.ssafy.momofunding.domain.user.domain;

import com.ssafy.momofunding.domain.user.dto.UserInfoUpdateRequestDto;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class User extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 40)
    private String email;

    @Column(nullable = false, length = 20)
    private String password;

    @Column(nullable = false, length = 20)
    private String nickname;

    @Column
    private String role;

    @PrePersist
    public void initializer() {
        role = (role == null ? "USER" : role);
    }

    @Builder
    public User(String email, String password, String nickname, String role) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.role = role;
    }

    public void updateUserInfo(UserInfoUpdateRequestDto userInfoUpdateRequestDto) {
        this.password = userInfoUpdateRequestDto.getPassword();
        this.nickname = userInfoUpdateRequestDto.getNickname();
    }

    public void updateUserPassword(String password) {
        this.password = password;
    }


}