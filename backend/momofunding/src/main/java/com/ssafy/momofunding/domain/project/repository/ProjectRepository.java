package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
