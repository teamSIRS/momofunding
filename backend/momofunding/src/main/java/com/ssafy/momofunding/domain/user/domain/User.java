package com.ssafy.momofunding.domain.user.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id
    Long id;

    @Column(nullable = false, length=30)
    String userId;

    @Column(nullable = false, length=40)
    String email;

    @Column(nullable = false, length=20)
    String password;

    @Column(nullable = false, length=20)
    String nickname;

    @Column(length=10)
    Timestamp registerDate;

    @Column(nullable = false, length=30)
    String role;

    @Builder
    public User (String userId, String email, String password, String nickname, String role){
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.role = role;
    }
}
