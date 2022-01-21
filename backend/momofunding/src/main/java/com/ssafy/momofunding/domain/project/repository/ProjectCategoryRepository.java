package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.ProjectCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectCategoryRepository extends JpaRepository <ProjectCategory, Long> {
}
