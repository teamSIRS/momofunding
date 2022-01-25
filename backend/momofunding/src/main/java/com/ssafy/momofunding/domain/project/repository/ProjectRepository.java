package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByProjectStateIdOrderByStartDateDesc(Long projectStateId, Sort sort);
    List<Project> findAllByProjectStateIdOrderByPopularityDesc(Long projectStateId, Sort sort);
    List<Project> findAllByProjectStateIdAndProjectCategoryIdOrderByStartDateDesc(Long projectStateId, Long projectCategoryId, Sort sort);
    List<Project> findAllByProjectStateIdAndProjectCategoryIdOrderByPopularityDesc(Long projectStateId, Long projectCategoryId, Sort sort);

}
