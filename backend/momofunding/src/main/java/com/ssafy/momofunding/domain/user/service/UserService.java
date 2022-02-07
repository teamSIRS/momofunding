package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserInfoResponseDto;
import com.ssafy.momofunding.domain.user.dto.UserInfoUpdateRequestDto;
import com.ssafy.momofunding.domain.user.dto.UserSignInRequestDto;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final JavaMailSender mailSender;
    private static final String FROM_ADDRESS = "momofundingbyteachers@gmail.com";

    //SignIn
    @Transactional
    public Long findEmailAndPassword(UserSignInRequestDto userSignInRequestDto) {
        Long userId = userRepository
                .findByEmailAndPassword(userSignInRequestDto.getEmail(), userSignInRequestDto.getPassword())
                .orElseThrow(() -> new EmptyResultDataAccessException("해당 ID: " + userSignInRequestDto.getEmail() +
                        " / PASSWORD: " + userSignInRequestDto.getPassword() + "와 일치하는 회원이 없습니다.", 1)).getId();
        return userId;
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
    public UserInfoResponseDto findUserInfoById(Long userId) {
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


    //회원 비밀번호 수정
    @Transactional
    public void updateUserPassword(String email, String password) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("해당 email에 해당하는 유저가 없습니다."));
        user.updateUserPassword(password);
    }

    //회원에게 비밀번호 재설정 메일 전송
    @Transactional
    public void sendMail(String email, String token) throws MailException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setFrom(FROM_ADDRESS);
        message.setSubject("Here is momofunding password reset link!");
        message.setText("localhost:3000/changePw/" + token);
        mailSender.send(message);
    }


}
