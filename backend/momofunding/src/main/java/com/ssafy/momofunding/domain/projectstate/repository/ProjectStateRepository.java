package com.ssafy.momofunding.domain.projectstate.repository;

import com.ssafy.momofunding.domain.projectstate.domain.ProjectState;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectStateRepository extends JpaRepository<ProjectState, Long> {
}
