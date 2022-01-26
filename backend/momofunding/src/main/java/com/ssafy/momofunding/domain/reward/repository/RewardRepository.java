package com.ssafy.momofunding.domain.reward.repository;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RewardRepository extends JpaRepository<Reward, Long> {
}
