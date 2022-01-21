package com.ssafy.momofunding.domain.user.service;

import com.ssafy.momofunding.domain.user.dto.UserSaveRequestDto;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public void save(UserSaveRequestDto userSaveRequestDto) {
        userRepository.save(userSaveRequestDto.toEntity());
    }

}
