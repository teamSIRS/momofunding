package com.ssafy.momofunding.domain.live.service;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.dto.LiveResponseWithCreatorDto;
import com.ssafy.momofunding.domain.live.dto.LiveSaveRequestDto;
import com.ssafy.momofunding.domain.live.dto.LiveSummaryUpdateRequestDto;
import com.ssafy.momofunding.domain.live.repository.LiveRepository;
import com.ssafy.momofunding.domain.liveState.domain.LiveState;
import com.ssafy.momofunding.domain.liveState.repository.LiveStateRepository;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.projectcategory.repository.ProjectCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LiveService {

    private final LiveRepository liveRepository;
    private final ProjectCategoryRepository projectCategoryRepository;
    private final ProjectRepository projectRepository;
    private final LiveStateRepository liveStateRepository;

    @Transactional
    public List<LiveResponseDto> findAllOrderById(){
        List<Live> lives = liveRepository.findAllByLiveStateIdOrderByIdDesc(1L);

        return lives.stream()
                .map(live -> new LiveResponseWithCreatorDto(live, live.getProject().getCreator()))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<LiveResponseDto> findAllOrderByViewerCount(){
        List<Live> lives = liveRepository.findAllByLiveStateIdOrderByViewerCountDesc(1L);

        return lives.stream()
                .map(live -> new LiveResponseWithCreatorDto(live, live.getProject().getCreator()))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<LiveResponseDto> findAllByProjectCategoryId(Long projectCategoryId, Sort sort){
        projectCategoryRepository.findById(projectCategoryId)
                .orElseThrow(()-> new IllegalArgumentException("????????? ???????????? ???????????? ???????????????. projectCategoryId : " + projectCategoryId));

        List<Live> lives = liveRepository.findAllByProjectCategoryIdAndLiveStateId(projectCategoryId, 1L, sort);

        return lives.stream()
                .map(live -> new LiveResponseWithCreatorDto(live, live.getProject().getCreator()))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<LiveResponseDto> findLivesByProjectId(Long projectId){
        projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("????????? ???????????? ???????????????. projectId : " + projectId));

        List<Live> lives = liveRepository.findAllByProjectIdAndLiveStateIdOrderByIdDesc(projectId, 2L);

        return lives.stream()
                .map(LiveResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Long saveLive(LiveSaveRequestDto liveSaveRequestDto){
        Long projectId = liveSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("????????? ???????????? ?????? ?????????. projectId : " + projectId));

        LiveState liveState = liveStateRepository.findById(1L).get();

        Live live = liveSaveRequestDto.toEntity();
        live.mapProject(project);
        live.mapProjectCategory(project.getProjectCategory());
        live.mapLiveState(liveState);

        project.updateIsLivePlaying(true);

        return liveRepository.save(live).getId();
    }

    @Transactional
    public void updateLiveSummary(LiveSummaryUpdateRequestDto liveUpdateRequestDto, Long liveId){
        Live live = liveRepository.findById(liveId)
                .orElseThrow(()-> new IllegalArgumentException("????????? ????????? ?????? ?????????. liveId : " + liveId));

        Long liveStateId = liveUpdateRequestDto.getLiveStateId();

        if (liveStateId != null) {
            LiveState liveState = liveStateRepository.findById(liveStateId)
                    .orElseThrow(() -> new IllegalArgumentException("????????? ????????? ?????? ???????????????. liveStateId : " + liveStateId));
            live.mapLiveState(liveState);
        }

        live.updateLiveSummary(liveUpdateRequestDto);
    }

    @Transactional
    public void updateViewerCount(Long liveId, Integer viewerCount){
        Live live = liveRepository.findById(liveId)
                .orElseThrow(()-> new IllegalArgumentException("????????? ????????? ?????? ?????????. liveId : " + liveId));

        live.updateViewerCount(viewerCount);
    }

    @Transactional
    public void endLive (Long liveId) {
        Live live = liveRepository.findById(liveId)
                .orElseThrow(() -> new IllegalArgumentException("????????? ????????? ?????? ?????????. liveId : " + liveId));

        LiveState liveState = liveStateRepository.findById(2L).get();
        LocalDateTime currentTime = LocalDateTime.now();
        LocalDateTime startTime = live.getRegisterTime();

        Duration duration = Duration.between(startTime,currentTime);
        live.updateTotalPlayTime(duration.getSeconds());
        live.mapLiveState(liveState);

        Project project = live.getProject();
        project.updateIsLivePlaying(false);
    }

    @Transactional
    public List<LiveResponseDto> searchLivesByCondition(String order, Long category, String keyword){
        List<Live> lives = liveRepository.searchLives(order, category, keyword);

        return lives.stream()
                .map(LiveResponseDto::new)
                .collect(Collectors.toList());
    }
}
