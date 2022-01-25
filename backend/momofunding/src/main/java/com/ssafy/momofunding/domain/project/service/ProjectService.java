package com.ssafy.momofunding.domain.project.service;

import com.ssafy.momofunding.domain.creator.dto.CreatorGetDetailResponseDto;
import com.ssafy.momofunding.domain.creator.repository.CreatorRepository;
import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.dto.ProjectGetDetailResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectGetListResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
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
        return projectRepository.save(project).getId();
    }

    @Transactional
    public Long updateProject(Long projectId, ProjectSaveRequestDto projectSaveRequestDto) {
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

    public ProjectGetDetailResponseDto getProjectDetail(Long projectId) {
        return new ProjectGetDetailResponseDto(projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId)),
                new CreatorGetDetailResponseDto(creatorRepository.findByProjectId(projectId)
                        .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId))));
    }

    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }

    public List<ProjectGetListResponseDto> findBySortDate(){
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByStartDateAsc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }

    public List<ProjectGetListResponseDto> findBySortPopularity() {
        List<Project> projects = projectRepository.findAllByProjectStateIdOrderByPopularityDesc(2L, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectGetListResponseDto::new)
                .collect(Collectors.toList());
    }
}
