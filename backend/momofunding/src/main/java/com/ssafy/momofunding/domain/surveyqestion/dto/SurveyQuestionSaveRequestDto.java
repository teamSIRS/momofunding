package com.ssafy.momofunding.domain.surveyqestion.dto;

import com.ssafy.momofunding.domain.surveyqestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class SurveyQuestionSaveRequestDto {

    private Long surveyId;
    private Long questionTypeId;
    private String title;

    @Builder
    public SurveyQuestionSaveRequestDto(String title, Long surveyId, Long questionTypeId){
        this.title = title;
        this.surveyId = surveyId;
        this.questionTypeId = questionTypeId;
    }

    public SurveyQuestion toEntity(){
        return SurveyQuestion.builder()
                .title(title)
                .build();
    }
}
