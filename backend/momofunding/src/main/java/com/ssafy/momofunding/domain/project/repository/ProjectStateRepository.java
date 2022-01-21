package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.ProjectState;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectStateRepository extends JpaRepository<ProjectState, Long> {
}
