package com.ssafy.momofunding.domain.surveyquestion.repository;

import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long> {
    Optional<SurveyQuestion> findFirstBySurveyId(Long surveyId);

}
