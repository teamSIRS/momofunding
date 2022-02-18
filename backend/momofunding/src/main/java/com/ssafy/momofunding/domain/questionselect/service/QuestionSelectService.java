package com.ssafy.momofunding.domain.questionselect.service;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectSaveRequestDto;
import com.ssafy.momofunding.domain.questionselect.repository.QuestionSelectRepository;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.repository.SurveyQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class QuestionSelectService {

    private final QuestionSelectRepository questionSelectRepository;
    private final SurveyQuestionRepository surveyQuestionRepository;

    @Transactional
    public Long save(QuestionSelectSaveRequestDto questionSelectSaveRequestDto){
        Long surveyQuestionId = questionSelectSaveRequestDto.getSurveyQuestionId();

        SurveyQuestion surveyQuestion = surveyQuestionRepository.findById(surveyQuestionId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 설문조사 질문 번호 입니다. surveyQuestionId : " + surveyQuestionId));

        QuestionSelect questionSelect = questionSelectSaveRequestDto.toEntity();
        questionSelect.mapSurveyQuestion(surveyQuestion);

        return questionSelectRepository.save(questionSelect).getId();
    }

}
