package com.ssafy.momofunding.domain.user.controller;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.service.UserService;
import com.sun.org.apache.regexp.internal.RE;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RequiredArgsConstructor
@RestController
public class UserApiController {
    private final UserService userService;

    //Sign-in
//    @PostMapping("/users/sign-in")
//    public Boolean signIn(String email, String password){
//        return userService.signIn(email,password);
//    }

    //Sign-up
    @PostMapping("/users")
    public ResponseEntity signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto){
        long userId = userService.saveUserInfo(userSignUpRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(userId);
    }

//
//    //회원 정보 조회
//    @GetMapping("/users/{userId}")
//    public ResponseEntity getUser(@PathVariable("userId") String userId){
//        Optional<User> user = userService.getUserInfo(userId);
//    }
////
////    //회원 정보 수정
//    @PutMapping("/users/{userId}")
//    public ResponseEntity modifyUser(@PathVariable("userId") String userId){
//
//
//    }
////
////
////
////    //회원 탈퇴
////    @DeleteMapping("/users/{userId}")
////
////
////
////    //닉네임 중복 조회
////    @GetMapping("/users/nickname/{nickname}")
////
////
////    //이메일 존재 여부 조회(아이디 찾기)
////    @GetMapping("/users/email/{email}")
//
//
//    //비밀번호 변경
////    @PutMapping("/users/password/{userId}");


}
