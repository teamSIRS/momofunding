package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class SurveyResponseDto {

    private Long id;
    private String title;
    private String content;
    private Timestamp startDate;
    private Timestamp endDate;

    public SurveyResponseDto(Survey survey){
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.content = survey.getContent();
        this.startDate = survey.getStartDate();
        this.endDate = survey.getEndDate();
    }

    @Builder
    public SurveyResponseDto(Long id, String title, String content, Timestamp startDate, Timestamp endDate){
        this.id = id;
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
