package com.ssafy.momofunding.domain.live.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class LiveSummaryUpdateRequestDto {

    private String title;
    private String content;
    private Integer totalPlayTime;
    private Long liveStateId;

    @Builder
    public LiveSummaryUpdateRequestDto(String title, String content, Integer totalPlayTime, Long liveStateId){
        this.title = title;
        this.content = content;
        this.totalPlayTime = totalPlayTime;
        this.liveStateId = liveStateId;
    }
}
