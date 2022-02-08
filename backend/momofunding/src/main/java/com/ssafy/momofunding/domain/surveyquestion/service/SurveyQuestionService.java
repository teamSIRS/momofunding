package com.ssafy.momofunding.domain.surveyquestion.service;

import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.questiontype.repository.QuestionTypeRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionSaveRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionUpdateRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.repository.SurveyQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class SurveyQuestionService {

    private final SurveyQuestionRepository surveyQuestionRepository;
    private final SurveyRepository surveyRepository;
    private final QuestionTypeRepository questionTypeRepository;

    @Transactional
    public Long save(SurveyQuestionSaveRequestDto surveySaveRequestDto) {
        Long surveyId = surveySaveRequestDto.getSurveyId();
        Long questionTypeId = surveySaveRequestDto.getQuestionTypeId();

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 설문조사 번호 입니다. surveyId : " + surveyId));

        QuestionType questionType = questionTypeRepository.findById(questionTypeId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 질문 타입 번호 입니다. questionTypeId : " + questionTypeId));

        SurveyQuestion surveyQuestion = surveySaveRequestDto.toEntity();
        surveyQuestion.mapSurvey(survey);
        surveyQuestion.mapQuestionType(questionType);

        return surveyQuestionRepository.save(surveyQuestion).getId();
    }

    @Transactional
    public SurveyQuestionResponseDto findSurveyQuestionById(Long surveyQuestionId) {
        SurveyQuestion surveyQuestion = surveyQuestionRepository.findById(surveyQuestionId)
                .orElseThrow(() -> new NoSuchElementException());

        return new SurveyQuestionResponseDto(surveyQuestion);
    }

    @Transactional
    public void updateSurveyQuestion(SurveyQuestionUpdateRequestDto updateRequestDto, Long surveyQuestionId) {

        SurveyQuestion surveyQuestion = surveyQuestionRepository.findById(surveyQuestionId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 질문 번호입니다. surveyQuestionId : " + surveyQuestionId));

        QuestionType questionType = questionTypeRepository.findById(updateRequestDto.getQuestionTypeId())
                .orElseThrow(() -> new IllegalArgumentException("잘못된 질문 유형입니다. QuestionTypeId : " + updateRequestDto.getQuestionTypeId()));

        surveyQuestion.mapQuestionType(questionType);

        surveyQuestion.updateTitle(updateRequestDto.getTitle());
    }

    @Transactional
    public void deleteSurveyQuestion(Long surveyQuestionId) {
        surveyQuestionRepository.deleteById(surveyQuestionId);
    }
}
