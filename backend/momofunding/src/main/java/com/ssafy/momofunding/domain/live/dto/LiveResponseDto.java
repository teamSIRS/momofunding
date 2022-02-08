package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class LiveResponseDto {

    private Long id;
    private String title;
    private String content;
    private Integer totalPlayTime;
    private Timestamp startTime;
    private Integer viewerCount;
    private Timestamp registerDate;
    private String sessionId;

    public LiveResponseDto (Live entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.totalPlayTime = entity.getTotalPlayTime();
        this.startTime = entity.getStartTime();
        this.viewerCount = entity.getViewerCount();
        this.registerDate = entity.getRegisterDate();
        this.sessionId = entity.getSessionId();
    }

    @Builder
    public LiveResponseDto(Long id, String title, String content, Integer totalPlayTime, Timestamp startTime, Integer viewerCount, Timestamp registerDate){
        this.id = id;
        this.title = title;
        this.content = content;
        this.totalPlayTime = totalPlayTime;
        this.startTime = startTime;
        this.viewerCount = viewerCount;
        this.registerDate = registerDate;
        this.sessionId = getSessionId();
    }
}
