package com.ssafy.momofunding.domain.surveyanswer.dto;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
public class SurveyAnswerDto {
    private Long selectId;
    private Long counts;
    private String content;

    public SurveyAnswerDto(SurveyAnswer surveyAnswer) {
        this.selectId = selectId;
        this.counts = counts;
        this.content = content;
    }
}
