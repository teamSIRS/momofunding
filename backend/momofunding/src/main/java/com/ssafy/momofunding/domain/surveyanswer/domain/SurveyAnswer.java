package com.ssafy.momofunding.domain.surveyanswer.domain;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class SurveyAnswer extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true, length = 100)
    private String content;

    @ManyToOne(targetEntity = SurveyQuestion.class)
    @JoinColumn(name = "survey_question_id", nullable = false)
    private SurveyQuestion surveyQuestion;

    @ManyToOne(targetEntity = QuestionSelect.class)
    @JoinColumn(name = "question_select_id", nullable = true)
    private QuestionSelect questionSelect;

    @Column(nullable = false)
    private Long userId;

    public void mapSurveyQuestion(SurveyQuestion surveyQuestion) {
        this.surveyQuestion = surveyQuestion;
    }

    public void mapQuestionSelect(QuestionSelect questionSelect) {
        this.questionSelect = questionSelect;
    }

    @Builder
    public SurveyAnswer(String content, Long userId) {
        this.content = content;
        this.userId = userId;
    }
}