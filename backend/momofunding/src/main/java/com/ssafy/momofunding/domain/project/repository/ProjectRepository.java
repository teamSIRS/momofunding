package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long>, ProjectRepositoryCustom {
    List<Project> findAllByUserId(Long userId);
}
