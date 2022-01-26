package com.ssafy.momofunding.domain.questionselect.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import lombok.Builder;
import lombok.Getter;

@Getter
public class QuestionSelectSaveRequestDto {

    private Long surveyQuestionId;
    private String content;

    @Builder
    public QuestionSelectSaveRequestDto(String content, Long surveyId, Long surveyQuestionId){
        this.content = content;
        this.surveyQuestionId = surveyQuestionId;
    }

    public QuestionSelect toEntity(){
        return QuestionSelect.builder()
                .content(content)
                .build();
    }
}
