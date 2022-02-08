package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class LiveSaveRequestDto {

    private String title;
    private String content;
    private Timestamp registerDate;
    private Long projectId;
    private Long projectCategoryId;
    private String sessionId;

    @Builder
    public LiveSaveRequestDto(String title, String content, Timestamp registerDate, Long projectId, Long projectCategoryId, String sessionId){
        this.title = title;
        this.content = content;
        this.registerDate = registerDate;
        this.projectId = projectId;
        this.projectCategoryId = projectCategoryId;
        this.sessionId = sessionId;
    }

    public Live toEntity(){
        return Live.builder()
                .title(title)
                .content(content)
                .registerDate(registerDate)
                .sessionId(sessionId)
                .build();
    }
}
