package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class SurveyQuestionChoiceAnswerResponseDto extends SurveyQuestionResponseDto{

    private List<SurveyAnswerDto> answers;

    public SurveyQuestionChoiceAnswerResponseDto(SurveyQuestion surveyQuestion, List<SurveyAnswerDto> answers){
        super(surveyQuestion);
        this.answers = answers;
    }
}
