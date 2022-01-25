package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByProjectStateIdOrderByStartDateAsc(Long projectStateId, Sort sort);
    List<Project> findAllByProjectStateIdOrderByPopularityDesc(Long projectStateId, Sort sort);
}
