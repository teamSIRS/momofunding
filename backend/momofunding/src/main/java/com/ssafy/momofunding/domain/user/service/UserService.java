package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.dto.UserEmailExistResponseDto;
import com.ssafy.momofunding.domain.user.dto.UserNicknameExistResponseDto;
import com.ssafy.momofunding.domain.user.dto.UserSignUpRequestDto;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.el.parser.BooleanNode;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

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
    public UserNicknameExistResponseDto findExistNickname(String nickname){
        return new UserNicknameExistResponseDto(userRepository.existsByNickname(nickname));
    }

    //email check
    @Transactional
    public UserEmailExistResponseDto findExistEmail(String email){
        return new UserEmailExistResponseDto(userRepository.existsByEmail(email));
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
