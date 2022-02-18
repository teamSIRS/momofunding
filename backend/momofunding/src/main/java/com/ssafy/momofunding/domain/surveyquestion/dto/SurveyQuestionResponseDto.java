package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class SurveyQuestionResponseDto {

    private Long id;
    private String title;
    private QuestionType questionType;

    public SurveyQuestionResponseDto(SurveyQuestion surveyQuestion){
        this.id = surveyQuestion.getId();
        this.title = surveyQuestion.getTitle();
        this.questionType = surveyQuestion.getQuestionType();
    }

    @Builder
    public SurveyQuestionResponseDto(Long id, String title){
        this.id = id;
        this.title = title;
    }
}
