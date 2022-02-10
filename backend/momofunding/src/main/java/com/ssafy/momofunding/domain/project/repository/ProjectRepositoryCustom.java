package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public interface ProjectRepositoryCustom {
    List<Project> searchProjects(String order, Long category, String keyword);
    void updateProjectStateIdToComplete(LocalDateTime today);
}
