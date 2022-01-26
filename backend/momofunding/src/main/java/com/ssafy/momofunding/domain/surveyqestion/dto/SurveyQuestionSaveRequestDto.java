package com.ssafy.momofunding.domain.surveyqestion.dto;

import com.ssafy.momofunding.domain.surveyqestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class SurveyQuestionSaveRequestDto {

    private Long surveyId;
    private String title;

    @Builder
    public SurveyQuestionSaveRequestDto(String title, Long surveyId){
        this.title = title;
        this.surveyId = surveyId;
    }

    public SurveyQuestion toEntity(){
        return SurveyQuestion.builder()
                .title(title)
                .build();
    }
}
