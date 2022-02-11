package com.ssafy.momofunding.domain.live.repository;

import com.ssafy.momofunding.domain.live.domain.Live;

import java.util.List;

public interface LiveRepositoryCustom {
    List<Live> searchLives(String order, Long category, String keyword);
}
