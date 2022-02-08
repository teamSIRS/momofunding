package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class SurveyQuestionEssayAnswerResponseDto extends SurveyQuestionResponseDto{

    private List<String> answers;

    public SurveyQuestionEssayAnswerResponseDto(SurveyQuestion surveyQuestion, List<String> answers){
        super(surveyQuestion);
        this.answers = answers;
    }
}
