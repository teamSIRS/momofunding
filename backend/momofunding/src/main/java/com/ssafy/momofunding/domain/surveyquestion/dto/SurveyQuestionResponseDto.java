package com.ssafy.momofunding.domain.surveyquestion.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class SurveyQuestionResponseDto {

    private Long id;
    private String title;
    private QuestionType questionType;
    private List<QuestionSelectResponseDto> questionIds;

    public SurveyQuestionResponseDto(SurveyQuestion surveyQuestion){
        this.id = surveyQuestion.getId();
        this.title = surveyQuestion.getTitle();
        this.questionType = surveyQuestion.getQuestionType();
        this.questionIds = surveyQuestion.getQuestionSelects().stream()
                .map(QuestionSelectResponseDto::new).collect(Collectors.toList());
    }

    @Builder
    public SurveyQuestionResponseDto(Long id, String title){
        this.id = id;
        this.title = title;
    }
}
