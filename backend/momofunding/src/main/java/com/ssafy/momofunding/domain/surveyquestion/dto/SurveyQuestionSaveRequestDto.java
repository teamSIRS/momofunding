package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;

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
