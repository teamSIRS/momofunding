package com.ssafy.momofunding.domain.user.domain;

import com.ssafy.momofunding.domain.user.dto.UserInfoUpdateRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.mariadb.jdbc.internal.com.send.parameters.TimestampParameter;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length=40)
    private String email;

    @Column(nullable = false, length=20)
    private String password;

    @Column(nullable = false, length=20)
    private String nickname;

    @Column
    private Timestamp registerDate;

    @Column
    private String role;

    @PrePersist
    public void initializer(){
        role = (role == null ? "USER" : role);
    }

    //@Builder 는 AllArgsConstructor와 같음
    //모든 멤버 필드에 대해서 매개변수를 받는 기본 생성자를 만드는거임
    //원하는 변수에만 생성되도록 하는데에 builder를 붙이자
    @Builder
    public User (String email, String password, String nickname, String role,Timestamp registerDate){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.role = role;
        this.registerDate = registerDate;
    }

    public void updateUserInfo(UserInfoUpdateRequestDto userInfoUpdateRequestDto){
        this.password = userInfoUpdateRequestDto.getPassword();
        this.nickname = userInfoUpdateRequestDto.getNickname();
    }

}