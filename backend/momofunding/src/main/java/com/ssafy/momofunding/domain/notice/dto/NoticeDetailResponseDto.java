package com.ssafy.momofunding.domain.notice.dto;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class NoticeDetailResponseDto {

    private Long id;
    private String title;
    private String content;
    private Timestamp registerDate;
    private Long viewerCount;

    @Builder
    public NoticeDetailResponseDto(Long id, String title, String content, Timestamp registerDate, Long viewerCount) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.registerDate = registerDate;
        this.viewerCount = viewerCount;
    }

    public NoticeDetailResponseDto(Notice notice){
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.registerDate = notice.getRegisterDate();
        this.viewerCount = notice.getViewerCount();
    }

}
