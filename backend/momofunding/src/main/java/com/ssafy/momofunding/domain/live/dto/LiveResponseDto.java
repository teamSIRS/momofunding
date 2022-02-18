package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class LiveResponseDto {

    private Long id;
    private String title;
    private String content;
    private Long totalPlayTime;
    private Integer viewerCount;
    private LocalDateTime registerDate;
    private String sessionId;
    private String subImageUrl;
    private Long projectId;

    public LiveResponseDto(Live entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.totalPlayTime = entity.getTotalPlayTime();
        this.viewerCount = entity.getViewerCount();
        this.registerDate = entity.getRegisterTime();
        this.sessionId = entity.getSessionId();
        this.subImageUrl = entity.getProject().getSubImageUrl();
        this.projectId = entity.getProject().getId();
    }

    @Builder
    public LiveResponseDto(Long id, String title, String content, Long totalPlayTime, Integer viewerCount, LocalDateTime registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.totalPlayTime = totalPlayTime;
        this.viewerCount = viewerCount;
        this.registerDate = registerDate;
        this.sessionId = getSessionId();
        this.subImageUrl = getSubImageUrl();
    }
}
