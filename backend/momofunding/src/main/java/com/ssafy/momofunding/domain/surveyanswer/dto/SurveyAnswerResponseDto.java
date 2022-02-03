package com.ssafy.momofunding.domain.surveyanswer.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class SurveyAnswerResponseDto {

    private Long userId;
    private Long questionSelectId;
    private String content;

    public SurveyAnswerResponseDto(SurveyAnswer surveyAnswer){
        this.content = surveyAnswer.getContent();
        this.userId = surveyAnswer.getUser().getId();

    }

    @Builder
    public SurveyAnswerResponseDto(String content) {
        this.content = content;
    }
}
