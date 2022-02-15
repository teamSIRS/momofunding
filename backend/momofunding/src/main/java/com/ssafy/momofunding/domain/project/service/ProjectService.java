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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProjectService {

    @Value("${spring.servlet.multipart.location}")
    private String imagePath;

    @Value("${pathSeparator}")
    private String separator;

    @Value("${serverApiUrl}")
    private String serverApiUrl;

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
        creator.updateCreatorImagePath(imagePath+ separator + "creator" + separator + "default.png");
        creator.updateCreatorImageUrl(serverApiUrl +"images/creator/default.png");
        creatorRepository.save(creator);

        return projectId;
    }

    @Transactional
    public Long updateProject(Long projectId, ProjectUpdateRequestDto projectUpdateRequestDto,
                              MultipartFile mainImg, MultipartFile subImg) throws IOException{
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        File projectImgPath = new File(imagePath+ separator + "project");
        if(!projectImgPath.exists()){
            projectImgPath.mkdir();
        }

        String projectResourcesPath = serverApiUrl +"images/project/";
        if(mainImg != null){
            String mainName = mainImg.getOriginalFilename()+"";
            try{
                if(!mainName.equals("")){
                    if(project.getMainImageUrl() != null){
                        File file = new File(project.getMainImagePath());
                        file.delete();
                    }
                    String mainFileName = projectId+"_main"+mainName.substring(mainName.lastIndexOf("."));
                    File mainImgFile = new File(imagePath + separator + "project" + separator + mainFileName);
                    mainImg.transferTo(mainImgFile);
                    projectUpdateRequestDto.setMainImageUrl(projectResourcesPath +mainFileName);
                    project.updateMainImagePath(mainImgFile.getPath());
                }else if(projectUpdateRequestDto.getMainImageUrl().equals("")){
                    File file = new File(project.getMainImagePath());
                    project.updateMainImagePath("");
                    file.delete();
                }
            } catch (IOException | NullPointerException e) {
                throw new IOException("MainImg 파일 처리에 실패하였습니다.");
            }
        }

        if(subImg != null){
            String subName = subImg.getOriginalFilename()+"";
            try{
                if(!subName.equals("")){
                    if(project.getSubImageUrl() != null){
                        File file = new File(project.getSubImagePath());
                        file.delete();
                    }
                    String subFileName = projectId+"_sub"+subName.substring(subName.lastIndexOf("."));
                    File subImgFile = new File(imagePath + separator + "project" + separator +subFileName);
                    subImg.transferTo(subImgFile);
                    projectUpdateRequestDto.setSubImageUrl(projectResourcesPath +subFileName);
                    project.updateSubImagePath(subImgFile.getPath());
                }else if(projectUpdateRequestDto.getSubImageUrl().equals("")){
                    File file = new File(project.getSubImagePath());
                    project.updateSubImagePath("");
                    file.delete();
                }
            } catch (IOException | NullPointerException e) {
                throw new IOException("SubImg 파일 처리에 실패하였습니다.");
            }
        }

        project.updateProject(projectUpdateRequestDto);
        
        Long projectCategoryId = projectUpdateRequestDto.getProjectCategoryId();
        if(projectUpdateRequestDto.getProjectCategoryId()!=0) {
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
        Creator creator = creatorRepository.findByProjectId(projectId)
                .orElseThrow(()-> new IllegalArgumentException("창작자를 찾을 수 없습니다.::projectId-"+projectId));
        if(!creator.getCreatorImageUrl().equals(serverApiUrl +"images/creator/default.png")){
            File creatorImgFile = new File(creator.getCreatorImagePath());
            creatorImgFile.delete();
        }

        Project project = projectRepository.findById(projectId)
                        .orElseThrow(()-> new IllegalArgumentException("프로젝트를 찾을 수 없습니다.::projectId-"+projectId));
        File projectImg = new File(project.getMainImagePath());
        projectImg.delete();
        projectImg = new File(project.getMainImagePath());
        projectImg.delete();
        projectRepository.delete(project);
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

    @Transactional
    public void updateProjectState(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        project.mapProjectState(projectStateRepository.getById(2L));
    }

    @Transactional
    public List<ProjectResponseDto> searchProjectsByCondition(String order, Long category, String keyword){
        List<Project> projects = projectRepository.searchProjects(order, category, keyword);

        return projects.stream()
                .map(ProjectResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void changeProjectsStateToComplete(LocalDateTime today){
        projectRepository.updateProjectStateIdToComplete(today);
    }

}
