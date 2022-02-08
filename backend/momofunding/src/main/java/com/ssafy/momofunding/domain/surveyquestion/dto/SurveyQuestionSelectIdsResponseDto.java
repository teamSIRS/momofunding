package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class SurveyQuestionSelectIdsResponseDto extends SurveyQuestionResponseDto{

    List<QuestionSelectResponseDto> selectIds;

    public SurveyQuestionSelectIdsResponseDto(SurveyQuestion surveyQuestion){
        super(surveyQuestion);
        this.selectIds = surveyQuestion.getQuestionSelects().stream()
                .map(QuestionSelectResponseDto::new).collect(Collectors.toList());
    }

}
