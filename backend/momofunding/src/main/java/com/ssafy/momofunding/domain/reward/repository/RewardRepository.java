package com.ssafy.momofunding.domain.reward.repository;

import com.ssafy.momofunding.domain.reward.domain.Reward;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RewardRepository extends JpaRepository<Reward, Long> {
    List<Reward> findAllByProjectId(Long projectId);
}
