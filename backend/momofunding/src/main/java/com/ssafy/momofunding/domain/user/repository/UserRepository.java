package com.ssafy.momofunding.domain.user.repository;

import com.ssafy.momofunding.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
//    Optional<User> findByEmailAndPassword(String email, String password)
    boolean existsByNickname(String nickname);
}
