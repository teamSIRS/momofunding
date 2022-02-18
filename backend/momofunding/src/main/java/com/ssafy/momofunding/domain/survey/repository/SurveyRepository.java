package com.ssafy.momofunding.domain.survey.repository;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findAllByProjectId(Long projectId);
}
