package com.ssafy.momofunding.domain.live.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LiveSummaryUpdateRequestDto {

    private String title;
    private String content;
    private Long liveStateId;

    @Builder
    public LiveSummaryUpdateRequestDto(String title, String content, Long liveStateId){
        this.title = title;
        this.content = content;
        this.liveStateId = liveStateId;
    }
}
