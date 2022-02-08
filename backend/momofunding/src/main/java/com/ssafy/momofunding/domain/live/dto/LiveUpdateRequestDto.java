package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class LiveUpdateRequestDto {

    private String title;
    private String content;
    private Integer totalPlayTime;
    private Long liveStateId;

    @Builder
    public LiveUpdateRequestDto(String title, String content, Integer totalPlayTime, Long liveStateId){
        this.title = title;
        this.content = content;
        this.totalPlayTime = totalPlayTime;
        this.liveStateId = liveStateId;
    }
}
