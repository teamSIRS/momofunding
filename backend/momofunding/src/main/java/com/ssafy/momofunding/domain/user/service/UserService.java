package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.*;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    //SignIn
    @Transactional
    public UserSignInResponseDto findEmailAndPassword(UserSignInRequestDto userSignInRequestDto){
        Long userId = userRepository
                .findByEmailAndPassword(userSignInRequestDto.getEmail(), userSignInRequestDto.getPassword())
                .orElseThrow(() -> new EmptyResultDataAccessException("해당 ID: "+ userSignInRequestDto.getEmail() +
                " / PASSWORD: " + userSignInRequestDto.getPassword() + "와 일치하는 회원이 없습니다.",1)).getId();
        return new UserSignInResponseDto(userId);
    }

    //SignUp
    @Transactional
    public Long saveUserInfo(UserSignUpRequestDto userSignUpRequestDto) {
        return userRepository.save(userSignUpRequestDto.toEntity()).getId();
    }

    //nickname check
    @Transactional
    public boolean findExistNickname(String nickname) {
        return userRepository.existsByNickname(nickname);
    }

    //email check
    @Transactional
    public boolean findExistEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    //ID로 회원 정보 조회
    @Transactional
    public UserInfoResponseDto getUserInfo(Long userId) {
        return new UserInfoResponseDto(userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 Id가 존재하지 않습니다. UserId : " + userId)));
    }

    //회원정보 수정
    @Transactional
    public void updateUserInfo(Long userId, UserInfoUpdateRequestDto userInfoUpdateRequestDto) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 Id가 존재하지 않습니다. UserId : " + userId));
        user.updateUserInfo(userInfoUpdateRequestDto);
    }

    //회원정보 삭제
    @Transactional
    public void deleteById(Long userId) {
        userRepository.deleteById(userId);
    }


}
