package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class SurveyUpdateRequestDto {

    private String title;
    private String content;
    private LocalDateTime endDate;

    @Builder
    public SurveyUpdateRequestDto(String title, String content, LocalDateTime endDate){
        this.title = title;
        this.content = content;
        this.endDate = endDate;
    }

    public Survey toEntity(){
        return Survey.builder()
                .title(title)
                .content(content)
                .endDate(endDate)
                .build();
    }
}
