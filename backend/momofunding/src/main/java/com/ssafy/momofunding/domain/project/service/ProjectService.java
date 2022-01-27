package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import com.ssafy.momofunding.domain.creator.repository.CreatorRepository;
import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectDetailResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectUpdateRequestDto;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.projectcategory.repository.ProjectCategoryRepository;
import com.ssafy.momofunding.domain.projectstate.repository.ProjectStateRepository;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectStateRepository projectStateRepository;
    private final ProjectCategoryRepository projectCategoryRepository;
    private final UserRepository userRepository;
    private final CreatorRepository creatorRepository;

    @Transactional
    public Long createProject(Long userId) {
        Project project = new Project();
        project.mapUser(userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다:: userId-"+userId)));
        project.mapProjectState(projectStateRepository.getById(1L));
        Long projectId = projectRepository.save(project).getId();

        Creator creator = new Creator();
        creator.mapProject(project);
        creatorRepository.save(creator);

        return projectId;
    }

    @Transactional
    public Long updateProject(Long projectId, ProjectUpdateRequestDto projectSaveRequestDto) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        project.updateProject(projectSaveRequestDto);
        
        Long projectCategoryId = projectSaveRequestDto.getProjectCategoryId();
        if(projectSaveRequestDto.getProjectCategoryId()!=null){
            project.mapProjectCategory(projectCategoryRepository.findById(projectCategoryId)
                    .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 카테고리 번호 입니다:: projectCategoryId-"+projectCategoryId)));
            for(Live live : project.getLives()){
                live.mapProjectCategory(projectCategoryRepository.findById(projectCategoryId)
                        .orElseThrow(()-> new IllegalArgumentException("잘못된 카테고리 번호 입니다:: projectCategoryId-"+projectCategoryId)));
            }
        }
        
        return projectId;
    }

    @Transactional
    public ProjectDetailResponseDto findProjectById(Long projectId) {
        return new ProjectDetailResponseDto(projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId)));
    }

    @Transactional
    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }

    @Transactional
    public List<ProjectResponseDto> findProjectsByDate(){
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByStartDateDesc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectResponseDto> findProjectsByPopularity() {
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByPopularityDesc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectResponseDto> findProjectsByCategoryDate(Long categoryId) {
        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByStartDateDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectResponseDto> findProjectsByCategoryPopularity(Long categoryId) {
        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByPopularityDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }
}
