package com.ssafy.momofunding.domain.surveyanswer.dto;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SurveyAnswerSaveRequestDto {

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
                .userId(userId)
                .build();
    }
}
