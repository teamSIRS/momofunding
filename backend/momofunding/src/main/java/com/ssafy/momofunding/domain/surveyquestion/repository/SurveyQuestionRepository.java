package com.ssafy.momofunding.domain.surveyquestion.repository;

import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long> {

}
