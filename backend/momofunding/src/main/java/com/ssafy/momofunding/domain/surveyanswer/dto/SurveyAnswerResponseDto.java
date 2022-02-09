package com.ssafy.momofunding.domain.surveyanswer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SurveyAnswerResponseDto {
    private Long selectId;
    private Long counts;
    private String content;

    public SurveyAnswerResponseDto(Long selectId, Long counts, String content) {
        this.selectId = selectId;
        this.counts = counts;
        this.content = content;
    }
}
