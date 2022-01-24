package com.ssafy.momofunding.domain.user.controller;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserInfoResponseDto;
import com.ssafy.momofunding.domain.user.dto.UserInfoUpdateRequestDto;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


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
    public ResponseEntity signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto) {
        Map<String, Object> responseMap = new HashMap<>();
        Long userId = userService.saveUserInfo(userSignUpRequestDto);
        responseMap.put("userId",userId);
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //닉네임 중복 조회
    @GetMapping("/users/nickname/{nickname}")
    public ResponseEntity<Map<String, Object>> checkNicknameDuplicate(@PathVariable("nickname") String nickname) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("isExist",userService.findExistNickname(nickname));
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);    
    }

    //이메일 중복 조회
    @GetMapping("/users/email/{email}")
    public ResponseEntity<Map<String, Object>> checkEmailDuplicate(@PathVariable("email") String email) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("isExist",userService.findExistEmail(email));
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

//    회원 정보 조회
    @GetMapping("/users/{userId}")
    public ResponseEntity getUserInfo(@PathVariable("userId") Long userId){
        UserInfoResponseDto userInfoResponseDto;
        Map<String, Object> responseMap = new HashMap<>();
        try {
            userInfoResponseDto = userService.getUserInfo(userId);
        }catch (IllegalArgumentException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(userInfoResponseDto);
    }

//    //회원 정보 수정
    @PutMapping("/users/{userId}")
    public ResponseEntity modifyUser(@PathVariable("userId") Long userId, @RequestBody UserInfoUpdateRequestDto userInfoUpdateRequestDto){
        Map<String, Object> responseMap = new HashMap<>();
        try {
            userService.updateUserInfo(userId, userInfoUpdateRequestDto);
        }catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        responseMap.put("userID", userId);
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

////
////
////
////    //회원 탈퇴
////    @DeleteMapping("/users/{userId}")
////
////
////

////
////
////    //이메일 존재 여부 조회(아이디 찾기)
////    @GetMapping("/users/email/{email}")
//
//
//    //비밀번호 변경
////    @PutMapping("/users/password/{userId}");


}
