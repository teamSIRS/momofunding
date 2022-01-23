package com.ssafy.momofunding.domain.user.controller;

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
        userService.saveUserInfo(userSignUpRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    //닉네임 중복 조회
    @GetMapping("/users/nickname/{nickname}")
    public ResponseEntity<Map<String, Object>> checkNicknameDuplicate(@PathVariable("nickname") String nickname) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            responseMap.put("isExist", userService.findExistNickname(nickname));
        } catch (Exception e) {
            responseMap.put("Error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //이메일 중복 조회
    @GetMapping("/users/email/{email}")
    public ResponseEntity<Map<String, Object>> checkEmailDuplicate(@PathVariable("email") String email) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            responseMap.put("isExist",userService.findExistEmail(email));
        }catch (Exception e){
            responseMap.put("Error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }


//
//    //회원 정보 조회
//    @GetMapping("/users/{userId}")
//    public ResponseEntity getUser(@PathVariable("userId") String userId){
//        Optional<User> user = userService.getUserInfo(userId);
//    }
////
    //회원 정보 수정
    @PutMapping("/users/{userId}")
    public ResponseEntity updateUser(@RequestBody UserInfoUpdateRequestDto userInfoUpdateRequestDto, @PathVariable("userId") Long userId){
        try {
            userService.updateUserInfo(userInfoUpdateRequestDto,userId);
        }catch (Exception e){

        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
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
