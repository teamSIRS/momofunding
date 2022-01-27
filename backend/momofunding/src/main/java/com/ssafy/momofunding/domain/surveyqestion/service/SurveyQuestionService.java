package com.ssafy.momofunding.domain.surveyqestion.service;

import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.questiontype.repository.QuestionTypeRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyqestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyqestion.dto.SurveyQuestionSaveRequestDto;
import com.ssafy.momofunding.domain.surveyqestion.repository.SurveyQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class SurveyQuestionService {

    private final SurveyQuestionRepository surveyQuestionRepository;
    private final SurveyRepository surveyRepository;
    private final QuestionTypeRepository questionTypeRepository;

    @Transactional
    public Long save(SurveyQuestionSaveRequestDto surveySaveRequestDto){
        Long surveyId = surveySaveRequestDto.getSurveyId();
        Long questionTypeId = surveySaveRequestDto.getQuestionTypeId();

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 설문조사 번호 입니다. surveyId : " + surveyId));

        QuestionType questionType = questionTypeRepository.findById(questionTypeId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 질문 타입 번호 입니다. questionTypeId : " + questionTypeId));

        SurveyQuestion surveyQuestion = surveySaveRequestDto.toEntity();
        surveyQuestion.mapSurvey(survey);
        surveyQuestion.mapQuestionType(questionType);

        return surveyQuestionRepository.save(surveyQuestion).getId();
    }

}