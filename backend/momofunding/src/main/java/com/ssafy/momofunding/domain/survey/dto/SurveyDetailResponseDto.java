package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionResponseDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Getter
@NoArgsConstructor
public class SurveyDetailResponseDto {

    private Long id;
    private String title;
    private String content;
    private Timestamp startDate;
    private Timestamp endDate;
    private List<SurveyQuestionResponseDto> questions;

    public SurveyDetailResponseDto(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.content = survey.getContent();
        this.startDate = survey.getStartDate();
        this.endDate = survey.getEndDate();
    }

    @Builder
    public SurveyDetailResponseDto(Long id, String title, String content, Timestamp startDate, Timestamp endDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public void setQuestions(List<SurveyQuestionResponseDto> surveyQuestionResponseList) {
        this.questions = surveyQuestionResponseList;
    }

}
