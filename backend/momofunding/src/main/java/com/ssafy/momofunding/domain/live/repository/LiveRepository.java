package com.ssafy.momofunding.domain.live.repository;

import com.ssafy.momofunding.domain.live.domain.Live;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LiveRepository extends JpaRepository<Live, Long> {
    List<Live> findAllByLiveStateId(Long liveStatId, Sort sort);
    List<Live> findAllByProjectCategoryId(Long projectCategoryId, Sort sort);
}
