package com.ssafy.momofunding.domain.user.controller;

import com.ssafy.momofunding.domain.user.dto.UserSignInRequestDto;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserApiController {
    private final UserService userService;

    @GetMapping("/users/login")
    public String login(){
        return "login";
    }


    @PostMapping("/users")
    public int save(@RequestBody UserSignUpRequestDto userSaveRequestDto){
        return userService.save(userSaveRequestDto);
    }


}
