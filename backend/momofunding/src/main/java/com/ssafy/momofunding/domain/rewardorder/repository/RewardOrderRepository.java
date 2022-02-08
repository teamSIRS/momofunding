package com.ssafy.momofunding.domain.rewardorder.repository;

import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RewardOrderRepository extends JpaRepository<RewardOrder, Long> {
    List<RewardOrder> findAllByUserId(Long userId);
    List<RewardOrder> findAllByProjectId(Long projectId);
}
