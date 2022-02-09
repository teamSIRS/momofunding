package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;

import java.util.List;

public interface ProjectRepositoryCustom {
    List<Project> searchProjects(String order, Long category, String keyword);
}
