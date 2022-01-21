package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectCreateRequestDto;
import com.ssafy.momofunding.domain.project.dto.ProjectCreateResponseDto;
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
    public ProjectCreateResponseDto projectCreate(ProjectCreateRequestDto projectCreateRequestDto){
        Project project = new Project();
        project.mapUser(userRepository.getById(projectCreateRequestDto.getUserId()));

        ProjectCreateResponseDto projectCreateResponseDto = new ProjectCreateResponseDto(projectRepository.save(project).getId());
        return projectCreateResponseDto;
    }
}
