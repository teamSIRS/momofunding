package com.ssafy.momofunding.domain.notice.dto;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class NoticeResponseDto {
    private Long id;
    private String title;
    private Timestamp registerTime;
    private Long viewerCount;

    @Builder
    public NoticeResponseDto(Long id, String title, Timestamp registerTime, Long viewerCount) {
        this.id = id;
        this.title = title;
        this.registerTime = registerTime;
        this.viewerCount = viewerCount;
    }

    public NoticeResponseDto(Notice notice){
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.registerTime = notice.getRegisterTime();
        this.viewerCount = notice.getViewerCount();
    }
}
