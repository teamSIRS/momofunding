package com.ssafy.momofunding.domain.live.repository;

import com.ssafy.momofunding.domain.live.domain.Live;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LiveRepository extends JpaRepository<Live, Long> {
    List<Live> findAllByLiveStateIdOrderByIdDesc(Long liveStatId);
    List<Live> findAllByLiveStateIdOrderByViewerCountDesc(Long liveStatId);

    List<Live> findAllByLiveStateId(Long liveStatId, Sort sort);
    List<Live> findAllByProjectCategoryIdAndLiveStateId(Long projectCategoryId, Long liveStateId, Sort sort);
}
