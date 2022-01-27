package com.ssafy.momofunding.domain.user.controller;

import com.ssafy.momofunding.domain.user.dto.*;
import com.ssafy.momofunding.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserApiController {
    private final UserService userService;

    //Sign-in
    @PostMapping("/sign-in")
    public ResponseEntity signIn(@RequestBody UserSignInRequestDto userSignInRequestDto){
        Map<String, Object> responseMap = new HashMap<>();
        UserSignInResponseDto userSignInResponseDto;
        try {
            userSignInResponseDto = userService.findEmailAndPassword(userSignInRequestDto);
        }catch (EmptyResultDataAccessException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(userSignInResponseDto);
    }

    //Sign-up
    @PostMapping("")
    public ResponseEntity signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto) {
        Map<String, Object> responseMap = new HashMap<>();
        Long userId = userService.saveUserInfo(userSignUpRequestDto);
        responseMap.put("userId",userId);
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //닉네임 중복 조회
    @GetMapping("/nickname/{nickname}")
    public ResponseEntity<Map<String, Object>> isExistNickname(@PathVariable("nickname") String nickname) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("isExist",userService.findExistNickname(nickname));
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);    
    }

    //이메일 중복 조회
    @GetMapping("/email/{email}")
    public ResponseEntity<Map<String, Object>> isExistEmail(@PathVariable("email") String email) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("isExist",userService.findExistEmail(email));
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //회원 정보 조회
    @GetMapping("/{userId}")
    public ResponseEntity findUserInfo(@PathVariable("userId") Long userId){
        UserInfoResponseDto userInfoResponseDto;
        Map<String, Object> responseMap = new HashMap<>();
        try {
            userInfoResponseDto = userService.findUserInfo(userId);
        }catch (IllegalArgumentException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(userInfoResponseDto);
    }

    //회원 정보 수정
    @PutMapping("/{userId}")
    public ResponseEntity updateUser(@PathVariable("userId") Long userId, @RequestBody UserInfoUpdateRequestDto userInfoUpdateRequestDto){
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

    //회원 삭제
    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") Long userId){
        Map<String, Object> responseMap = new HashMap<>();
        try {
            userService.deleteById(userId);
        }catch (EmptyResultDataAccessException e){
            responseMap.put("errorMsg", "해당 Id가 존재하지 않습니다. UserId : " + userId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        responseMap.put("userId", userId);
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }
}
