package com.ssafy.momofunding.domain.surveyanswer.repository;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SurveyAnswerRepository extends JpaRepository<SurveyAnswer, Long> {
    List<SurveyAnswer> findAllBySurveyQuestionId(Long surveyQuestionId);

//    @Query(nativeQuery = true, "select sa.questionSelect.id as selectId, count(sa.id) as count, qs.content as content" +
//            " from SurveyAnswer sa, QuestionSelect as qs"+
//            " where sa.surveyQuestion.id = 2"+
//            " group by qs.id"
//    )
    @Query(nativeQuery = true, value = "select sa.question_select_id selectId, count(sa.id) counts, qs.content content " +
            "from survey_answer sa, question_select qs " +
            "where sa.question_select_id = qs.id AND sa.survey_question_id = 2 " +
            "group by question_select_id"
            )
    List<SurveyAnswerDto> findChoiceAnswerBySurveyQuestionId(Long surveyQuestionId);
}
