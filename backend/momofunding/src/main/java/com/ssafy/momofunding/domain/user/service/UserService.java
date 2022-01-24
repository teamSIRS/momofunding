package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserInfoResponseDto;
import com.ssafy.momofunding.domain.user.dto.UserInfoUpdateRequestDto;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

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
