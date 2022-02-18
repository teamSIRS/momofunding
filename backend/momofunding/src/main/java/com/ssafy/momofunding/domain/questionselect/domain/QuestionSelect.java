package com.ssafy.momofunding.domain.questionselect.domain;

import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class QuestionSelect extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=30)
    private String content;

    @ManyToOne(targetEntity = SurveyQuestion.class)
    @JoinColumn(name = "survey_question_id", nullable = false)
    private SurveyQuestion surveyQuestion;

    @OneToMany(mappedBy = "questionSelect", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SurveyAnswer> surveyAnswers;

    public void mapSurveyQuestion(SurveyQuestion surveyQuestion){
        this.surveyQuestion = surveyQuestion;
    }

    @Builder
    public QuestionSelect(String content){
        this.content = content;
    }

}