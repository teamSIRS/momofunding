package com.ssafy.momofunding.domain.creator.repository;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreatorRepository extends JpaRepository<Creator, Long> {
    Creator findByProjectId(Long projectId);
}
