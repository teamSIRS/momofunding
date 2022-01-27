package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectGetDetailResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectGetListResponseDto;
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

    @Transactional
    public Long createProject(Long userId) {
        Project project = new Project();

        project.mapUser(userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다:: userId-"+userId)));

        project.mapProjectState(projectStateRepository.getById(1L));
        return projectRepository.save(project).getId();
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
    public ProjectGetDetailResponseDto getProjectDetail(Long projectId) {
        return new ProjectGetDetailResponseDto(projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId)));
    }

    @Transactional
    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }

    @Transactional
    public List<ProjectGetListResponseDto> getProjectListByDate(){
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByStartDateDesc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectGetListResponseDto> getProjectListByPopularity() {
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByPopularityDesc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectGetListResponseDto> getProjectListByCategoryDate(Long categoryId) {
        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByStartDateDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectGetListResponseDto> getProjectListByCategoryPopularity(Long categoryId) {
        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByPopularityDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }
}
