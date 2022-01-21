package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.projectcategory.repository.ProjectCategoryRepository;
import com.ssafy.momofunding.domain.projectstate.repository.ProjectStateRepository;
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
    public Long projectCreate(Long userId) {
        Project project = new Project();

        project.mapUser(userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다:: userId-"+userId)));

        project.mapProjectState(projectStateRepository.getById(1L));
        return projectRepository.save(project).getId();
    }

    @Transactional
    public void projectSave(Long projectId, ProjectSaveRequestDto projectSaveRequestDto) {
        projectSaveRequestDto.setId(projectId);
        Project project = projectSaveRequestDto.toEntity();

        project.mapUser(userRepository.getById(projectSaveRequestDto.getUserId()));
        project.mapProjectState(projectStateRepository.getById(projectSaveRequestDto.getProjectStateId()));
        if(projectSaveRequestDto.getProjectCategoryId()!=null){
            project.mapProjectCategory(projectCategoryRepository.getById(projectSaveRequestDto.getProjectCategoryId()));
        }

        projectRepository.save(project);
    }
}
