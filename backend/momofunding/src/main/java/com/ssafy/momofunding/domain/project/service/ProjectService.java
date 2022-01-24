package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.creator.dto.CreatorGetDetailResponseDto;
import com.ssafy.momofunding.domain.creator.repository.CreatorRepository;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectGetDetailResponseDto;
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
    private final CreatorRepository creatorRepository;

    @Transactional
    public Long projectCreate(Long userId) {
        Project project = new Project();

        project.mapUser(userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다:: userId-"+userId)));
        
        return projectRepository.save(project).getId();
    }

    @Transactional
    public void projectSave(Long projectId, ProjectSaveRequestDto projectSaveRequestDto) {
        projectSaveRequestDto.setId(projectId);
        Project project = projectSaveRequestDto.toEntity();

        project.mapUser(userRepository.findById(projectSaveRequestDto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다:: userId-"+projectSaveRequestDto.getUserId())));
        project.mapProjectState(projectStateRepository.findById(projectSaveRequestDto.getProjectStateId())
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 상태 번호 입니다:: projectStateId-"+projectSaveRequestDto.getProjectStateId())));
        if(projectSaveRequestDto.getProjectCategoryId()!=null){
            project.mapProjectCategory(projectCategoryRepository.findById(projectSaveRequestDto.getProjectCategoryId())
                    .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 카테고리 번호 입니다:: projectCategoryId-"+projectSaveRequestDto.getProjectCategoryId())));
        }

        projectRepository.save(project);
    }

    public ProjectGetDetailResponseDto getProjectDetail(Long projectId) {
        return new ProjectGetDetailResponseDto(projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId)),
                new CreatorGetDetailResponseDto(creatorRepository.findByProjectId(projectId)
                        .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId))));
    }
}
