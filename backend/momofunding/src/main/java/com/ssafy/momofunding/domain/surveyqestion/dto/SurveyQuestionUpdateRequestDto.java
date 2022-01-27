package com.ssafy.momofunding.domain.surveyqestion.dto;

import com.ssafy.momofunding.domain.surveyqestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;

@Getter
public class SurveyQuestionUpdateRequestDto {

    private Long questionTypeId;
    private String title;

    @Builder
    public SurveyQuestionUpdateRequestDto(String title, Long questionTypeId){
        this.title = title;
        this.questionTypeId = questionTypeId;
    }

    public SurveyQuestion toEntity(){
        return SurveyQuestion.builder()
                .title(title)
                .build();
    }
}
