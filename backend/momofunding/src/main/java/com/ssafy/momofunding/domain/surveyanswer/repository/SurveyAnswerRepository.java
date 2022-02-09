package com.ssafy.momofunding.domain.surveyanswer.repository;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SurveyAnswerRepository extends JpaRepository<SurveyAnswer, Long> {
    List<SurveyAnswer> findAllBySurveyQuestionId(Long surveyQuestionId);

    @Query(value = "select new com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerResponseDto(" +
            "qs.id, count(sa.id), qs.content) " +
            "FROM SurveyAnswer sa, QuestionSelect qs " +
            "where sa.questionSelect.id = qs.id AND sa.surveyQuestion.id = :surveyQuestionId " +
            "group by sa.questionSelect.id")
    List<SurveyAnswerResponseDto> findChoiceAnswerBySurveyQuestionId(Long surveyQuestionId);
}
