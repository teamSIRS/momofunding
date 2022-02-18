package com.ssafy.momofunding.domain.surveyanswer.repository;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SurveyAnswerRepository extends JpaRepository<SurveyAnswer, Long> {
    List<SurveyAnswer> findAllBySurveyQuestionId(Long surveyQuestionId);

    @Query(value = "select new com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerResponseDto(" +
            "qs.id, count(sa.id), qs.content) " +
            "FROM QuestionSelect qs left outer join SurveyAnswer sa " +
            "on qs.id = sa.questionSelect.id where qs.surveyQuestion.id = :surveyQuestionId " +
            "group by qs.id")
    List<SurveyAnswerResponseDto> findChoiceAnswerBySurveyQuestionId(@Param("surveyQuestionId") Long surveyQuestionId);

    Boolean existsBySurveyQuestionIdAndUserId(Long surveyQuestionId, Long userId);
}
