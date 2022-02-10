package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class LiveResponseDto {

    private Long id;
    private String title;
    private String content;
    private Long totalPlayTime;
    private Integer viewerCount;
    private Timestamp registerDate;
    private String sessionId;

    public LiveResponseDto (Live entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.totalPlayTime = entity.getTotalPlayTime();
        this.viewerCount = entity.getViewerCount();
        this.registerDate = entity.getRegisterDate();
        this.sessionId = entity.getSessionId();
    }

    @Builder
    public LiveResponseDto(Long id, String title, String content, Long totalPlayTime, Integer viewerCount, Timestamp registerDate){
        this.id = id;
        this.title = title;
        this.content = content;
        this.totalPlayTime = totalPlayTime;
        this.viewerCount = viewerCount;
        this.registerDate = registerDate;
        this.sessionId = getSessionId();
    }
}
