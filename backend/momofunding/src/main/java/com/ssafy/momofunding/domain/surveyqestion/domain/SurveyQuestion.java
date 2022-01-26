package com.ssafy.momofunding.domain.surveyqestion.domain;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class SurveyQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=100)
    private String title;

    @ManyToOne(targetEntity = Survey.class)
    @JoinColumn(name = "survey_id", nullable = false)
    private Survey survey;

    public void mapSurvey(Survey survey){
        this.survey = survey;
    }

    @Builder
    public SurveyQuestion(String title){
        this.title = title;
    }

}