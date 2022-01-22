package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    //SignUp
    @Transactional
    public void saveUserInfo(UserSignUpRequestDto userSignUpRequestDto) {
        userRepository.save(userSignUpRequestDto.toEntity());
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
    public Optional<User> getUserInfo(Long userId) {
        return userRepository.findById(userId);
    }


//    @Transactional
//    public Optional<User> getUserInfo(String userId){
//        return userRepository.fin
//    }


//    @Transactional
//    public Boolean checkUserExist(String email, String password){
//        Optional<User> userWrapper = userRepository.findByEmailAndPassword(email,password);
//        User user = userWrapper.get();
//
//    }

}
