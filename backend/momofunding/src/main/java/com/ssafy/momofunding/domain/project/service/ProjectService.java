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
import com.ssafy.momofunding.domain.rewardorder.domain.RewardOrder;
import com.ssafy.momofunding.domain.rewardorder.repository.RewardOrderRepository;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProjectService {

    @Value("${spring.servlet.multipart.location}")
    private String imagePath;

    private final ProjectRepository projectRepository;
    private final ProjectStateRepository projectStateRepository;
    private final ProjectCategoryRepository projectCategoryRepository;
    private final UserRepository userRepository;
    private final CreatorRepository creatorRepository;
    private final RewardOrderRepository rewardOrderRepository;

    @Transactional
    public Long createProject(Long userId) {
        Project project = new Project();
        project.mapUser(userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호 입니다:: userId-"+userId)));
        project.mapProjectState(projectStateRepository.getById(1L));
        Long projectId = projectRepository.save(project).getId();

        Creator creator = new Creator();
        creator.mapProject(project);
        creatorRepository.save(creator);

        return projectId;
    }

    @Transactional
    public Long updateProject(Long projectId, ProjectUpdateRequestDto projectUpdateRequestDto,
                              MultipartFile mainImg, MultipartFile subImg) throws IOException{
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        String mainName = mainImg.getOriginalFilename()+"";
        String subName = subImg.getOriginalFilename()+"";

        try {
            if(!mainName.equals("")){
                File mainImgFile = new File(projectId+"_main"+mainName.substring(mainName.lastIndexOf(".")));
                mainImg.transferTo(mainImgFile);
                projectUpdateRequestDto.setMainImageUrl(imagePath+"\\"+mainImgFile.getPath());
            }else if(project.getMainImageUrl() != null){
                File file = new File(project.getMainImageUrl());
                file.delete();
            }

            if(!subName.equals("")){
                File subImgFile = new File(projectId+"_sub"+subName.substring(subName.lastIndexOf(".")));
                subImg.transferTo(subImgFile);
                projectUpdateRequestDto.setSubImageUrl(imagePath+"\\"+subImgFile.getPath());
            }else if(project.getSubImageUrl() != null){
                File file = new File(project.getSubImageUrl());
                file.delete();
            }
        } catch (IOException | NullPointerException e) {
            throw new IOException("파일 이미지 업로드에 실패하였습니다.");
        }

        project.updateProject(projectUpdateRequestDto);
        
        Long projectCategoryId = projectUpdateRequestDto.getProjectCategoryId();
        if(projectUpdateRequestDto.getProjectCategoryId()!=null) {
            project.mapProjectCategory(projectCategoryRepository.findById(projectCategoryId)
                    .orElseThrow(() -> new IllegalArgumentException("잘못된 프로젝트 카테고리 번호 입니다:: projectCategoryId-" + projectCategoryId)));
            for (Live live : project.getLives()) {
                live.mapProjectCategory(projectCategoryRepository.findById(projectCategoryId)
                        .orElseThrow(() -> new IllegalArgumentException("잘못된 카테고리 번호 입니다:: projectCategoryId-" + projectCategoryId)));
            }
        }

        return projectId;
    }

    @Transactional
    public ProjectDetailResponseDto findProjectById(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new NoSuchElementException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));
        return new ProjectDetailResponseDto(project);
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
        projectCategoryRepository.findById(categoryId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 카테고리 번호입니다:: projectCategoryId-"+categoryId));

        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByStartDateDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectResponseDto> findProjectsByCategoryPopularity(Long categoryId) {
        projectCategoryRepository.findById(categoryId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 카테고리 번호입니다:: projectCategoryId-"+categoryId));

        List<Project> projects = projectRepository.findAllByProjectStateIdAndProjectCategoryIdOrderByPopularityDesc(2L, categoryId, Sort.by("id").ascending());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public boolean isPlayLive(Long projectId) {
        Project projects = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다. projectId : " + projectId));

        List<Live> lives = projects.getLives();
        for (Live live: lives){
            if (live.getLiveState().getId() == 1L)
                return true;
        }

        return false;
    }

    @Transactional
    public List<ProjectResponseDto> getProjectsByUserCreator(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호 입니다:: userId-"+userId));

        List<Project> projects = projectRepository.findAllByUserId(userId);

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ProjectResponseDto> getProjectsByUserOrder(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 회원 번호 입니다:: userId-"+userId));

        List<RewardOrder> rewardOrders = rewardOrderRepository.findAllByUserId(userId);
        List<Project> projects = rewardOrders.stream()
                .map(RewardOrder::getProject)
                .distinct()
                .collect(Collectors.toList());

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }
}
