package com.ssafy.momofunding.domain.questionselect.domain;

import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class QuestionSelect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=30)
    private String content;

    @ManyToOne(targetEntity = SurveyQuestion.class)
    @JoinColumn(name = "survey_question_id", nullable = false)
    private SurveyQuestion surveyQuestion;

    public void mapSurveyQuestion(SurveyQuestion surveyQuestion){
        this.surveyQuestion = surveyQuestion;
    }

    @Builder
    public QuestionSelect(String content){
        this.content = content;
    }

}