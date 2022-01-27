package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class SurveyUpdateRequestDto {

    private String title;
    private String content;
    private Timestamp startDate;
    private Timestamp endDate;

    @Builder
    public SurveyUpdateRequestDto(String title, String content, Timestamp startDate, Timestamp endDate){
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Survey toEntity(){
        return Survey.builder()
                .title(title)
                .content(content)
                .startDate(startDate)
                .endDate(endDate)
                .build();
    }
}
