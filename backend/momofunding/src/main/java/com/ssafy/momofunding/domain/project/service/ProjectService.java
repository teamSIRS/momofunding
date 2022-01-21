package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.domain.ProjectCategory;
import com.ssafy.momofunding.domain.project.domain.ProjectState;
import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
import com.ssafy.momofunding.domain.project.repository.ProjectCategoryRepository;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.project.repository.ProjectStateRepository;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectStateRepository projectStateRepository;
    private final ProjectCategoryRepository projectCategoryRepository;
    private final UserRepository userRepository;

    @Transactional
    public void projectSave(ProjectSaveRequestDto projectSaveRequestDto){
        Project project = projectSaveRequestDto.toEntity();

        project.mapProjectState((ProjectState)projectStateRepository.getById(Long.valueOf(1)));
        if(projectSaveRequestDto.getProjectCategoryId() != null) project.mapProjectCategory((ProjectCategory) projectCategoryRepository.getById(projectSaveRequestDto.getProjectCategoryId()));
        project.mapUser(userRepository.getById(Long.valueOf(projectSaveRequestDto.getUserId())));

        projectRepository.save(project);
    }
}
