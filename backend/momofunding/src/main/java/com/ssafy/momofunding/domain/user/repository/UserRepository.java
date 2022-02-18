package com.ssafy.momofunding.domain.user.repository;

import com.ssafy.momofunding.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByNickname(String nickname);

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailAndPassword(String email, String password);
}
