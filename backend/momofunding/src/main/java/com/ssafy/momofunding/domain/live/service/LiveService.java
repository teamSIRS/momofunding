package com.ssafy.momofunding.domain.live.service;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.dto.LiveSaveRequestDto;
import com.ssafy.momofunding.domain.live.repository.LiveRepository;
import com.ssafy.momofunding.domain.liveState.domain.LiveState;
import com.ssafy.momofunding.domain.liveState.repository.LiveStateRepository;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import com.ssafy.momofunding.domain.projectcategory.repository.ProjectCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LiveService {

    private final LiveRepository liveRepository;
    private final ProjectRepository projectRepository;
    private final ProjectCategoryRepository projectCategoryRepository;
    private final LiveStateRepository liveStateRepository;

    @Transactional
    public List<LiveResponseDto> findBySort(Sort sort) {
        List<Live> lives = liveRepository.findAllByLiveStateId(1L, sort);

        return lives.stream()
                .map(LiveResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Long save(LiveSaveRequestDto liveSaveRequestDto){
        Long projectId = liveSaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호 입니다. projectId : " + projectId));

        Long projectCategoryId = liveSaveRequestDto.getProjectCategoryId();
        ProjectCategory projectCategory = projectCategoryRepository.findById(projectCategoryId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 카테고리 번호 입니다. projectCategoryId : " + projectCategoryId));

        LiveState liveState = liveStateRepository.findById(1L).get();

        Live live = liveSaveRequestDto.toEntity();
        live.mapProject(project);
        live.mapProjectCategory(projectCategory);
        live.mapLiveState(liveState);

        return liveRepository.save(live).getId();
    }
}
