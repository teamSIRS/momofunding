package com.ssafy.momofunding.domain.live.repository;

import com.ssafy.momofunding.domain.live.domain.Live;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LiveRepository extends JpaRepository<Live, Long>, LiveRepositoryCustom {
    @EntityGraph(attributePaths = {"project", "project.creator"})
    List<Live> findAllByLiveStateIdOrderByIdDesc(Long liveStateId);

    @EntityGraph(attributePaths = {"project", "project.creator"})
    List<Live> findAllByLiveStateIdOrderByViewerCountDesc(Long liveStateId);

    List<Live> findAllByProjectIdAndLiveStateIdOrderByIdDesc(Long ProjectId, Long liveStateId);

    @EntityGraph(attributePaths = {"project", "project.creator"})
    List<Live> findAllByProjectCategoryIdAndLiveStateId(Long projectCategoryId, Long liveStateId, Sort sort);
}
