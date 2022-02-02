package com.ssafy.momofunding.domain.surveyanswer.dto;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import lombok.Builder;
import lombok.Getter;

@Getter
public class SurveyAnswerSaveRequestDto {

    private Long surveyAnswerId;
    private Long surveyQuestionId;
    private Long userId;
    private Long questionSelectId;
    private String content;

    @Builder
    public SurveyAnswerSaveRequestDto(String content, Long surveyQuestionId, Long userId, Long questionSelectId) {
        this.content = content;
        this.surveyQuestionId = surveyQuestionId;
        this.userId = userId;
        this.questionSelectId = questionSelectId;

    }

    public SurveyAnswer toEntity() {
        return SurveyAnswer.builder()
                .content(content)
                .build();
    }
}
