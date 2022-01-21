package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.dto.LiveResponseDto;
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
    public void saveUserInfo(UserSignUpRequestDto userSignUpRequestDto){
        userRepository.save(userSignUpRequestDto.toEntity()).getId();
    }

    //nickname check
    @Transactional
    public LiveResponseDto findExistNickname(String nickname){
        LiveResponseDto userNicknameExistResponseDto = new LiveResponseDto(userRepository.existsByNickname(nickname));
        return userNicknameExistResponseDto;
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
