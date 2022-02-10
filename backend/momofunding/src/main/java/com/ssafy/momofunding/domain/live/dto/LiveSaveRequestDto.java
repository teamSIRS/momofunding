package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Builder;
import lombok.Getter;

@Getter
public class LiveSaveRequestDto {

    private String title;
    private String content;
    private Long projectId;
    private Long projectCategoryId;
    private String sessionId;

    @Builder
    public LiveSaveRequestDto(String title, String content, Long projectId, Long projectCategoryId, String sessionId){
        this.title = title;
        this.content = content;
        this.projectId = projectId;
        this.projectCategoryId = projectCategoryId;
        this.sessionId = sessionId;
    }

    public Live toEntity(){
        return Live.builder()
                .title(title)
                .content(content)
                .sessionId(sessionId)
                .build();
    }
}
