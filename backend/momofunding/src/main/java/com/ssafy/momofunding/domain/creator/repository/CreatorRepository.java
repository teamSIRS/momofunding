package com.ssafy.momofunding.domain.creator.repository;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CreatorRepository extends JpaRepository<Creator, Long> {
    Optional<Creator> findByProjectId(Long projectId);
}
