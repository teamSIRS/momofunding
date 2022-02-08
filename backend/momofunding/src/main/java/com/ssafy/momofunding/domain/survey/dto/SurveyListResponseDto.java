package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor
public class SurveyListResponseDto {

    private Long id;
    private String title;
    private Timestamp startDate;
    private Timestamp endDate;

    public SurveyListResponseDto(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.startDate = survey.getStartDate();
        this.endDate = survey.getEndDate();
    }

    @Builder
    public SurveyListResponseDto(Long id, String title, Timestamp startDate, Timestamp endDate) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
