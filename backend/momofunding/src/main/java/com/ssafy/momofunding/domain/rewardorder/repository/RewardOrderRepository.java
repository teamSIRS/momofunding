package com.ssafy.momofunding.domain.rewardorder.repository;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RewardOrderRepository extends JpaRepository<RewardOrder, Long> {
}
