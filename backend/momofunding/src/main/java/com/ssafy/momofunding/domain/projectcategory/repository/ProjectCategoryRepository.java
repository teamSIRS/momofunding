package com.ssafy.momofunding.domain.projectcategory.repository;

import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectCategoryRepository extends JpaRepository <ProjectCategory, Long> {
}
