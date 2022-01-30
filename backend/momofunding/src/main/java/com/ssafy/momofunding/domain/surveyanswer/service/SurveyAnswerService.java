package com.ssafy.momofunding.domain.surveyanswer.service;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectResponseDto;
import com.ssafy.momofunding.domain.questionselect.repository.QuestionSelectRepository;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.questiontype.repository.QuestionTypeRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerSaveRequestDto;
import com.ssafy.momofunding.domain.surveyanswer.repository.SurveyAnswerRepository;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.repository.SurveyQuestionRepository;
import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class SurveyAnswerService {

    private final SurveyAnswerRepository surveyAnswerRepository;
    private final SurveyQuestionRepository surveyQuestionRepository;
    private final QuestionSelectRepository questionSelectRepository;
    private final UserRepository userRepository;

    @Transactional
    public Long saveSurveyAnswer(SurveyAnswerSaveRequestDto saveRequestDto){
        Long surveyQuestionId = saveRequestDto.getSurveyQuestionId();
        Long questionSelectId = saveRequestDto.getQuestionSelectId();
        Long userId = saveRequestDto.getUserId();

        SurveyAnswer surveyAnswer = saveRequestDto.toEntity();

        SurveyQuestion surveyQuestion = surveyQuestionRepository.findById(surveyQuestionId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 설문조사 질문 번호 입니다. surveyQuestionId : " + surveyQuestionId));
        surveyAnswer.mapSurveyQuestion(surveyQuestion);

        if (questionSelectId != null) {
            QuestionSelect questionSelect = questionSelectRepository.findById(questionSelectId)
                    .orElseThrow(() -> new IllegalArgumentException("잘못된 질문 보기 번호 입니다. questionSelectId : " + questionSelectId));
            surveyAnswer.mapQuestionSelect(questionSelect);
        }

        User user = userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 유저 번호 입니다. userId : " + userId));
        surveyAnswer.mapUser(user);

        return surveyAnswerRepository.save(surveyAnswer).getId();
    }

}
