package com.ssafy.momofunding.domain.surveyquestion.domain;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

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

    @ManyToOne(targetEntity = QuestionType.class)
    @JoinColumn(name = "question_type_id", nullable = false)
    private QuestionType questionType;

    @OneToMany(mappedBy = "surveyQuestion", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<QuestionSelect> questionSelects;

    public void mapSurvey(Survey survey){
        this.survey = survey;
    }

    public void mapQuestionType(QuestionType questionType){
        this.questionType = questionType;
    }

    @Builder
    public SurveyQuestion(String title){
        this.title = title;
    }

    public void updateTitle(String title) {
        this.title = title;
    }

}