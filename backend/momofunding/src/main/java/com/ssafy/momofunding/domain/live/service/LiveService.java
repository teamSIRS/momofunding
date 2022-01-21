package com.ssafy.momofunding.domain.live.service;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.repository.LiveRepository;
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

    @Transactional
    public List<LiveResponseDto> findBySort(Sort sort){
        List<Live> lives = liveRepository.findAllByLiveStateId(1L, sort);

        return lives.stream()
                .map(LiveResponseDto::new)
                .collect(Collectors.toList());
    }
}
