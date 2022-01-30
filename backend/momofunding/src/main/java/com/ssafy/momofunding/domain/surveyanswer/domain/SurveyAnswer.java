package com.ssafy.momofunding.domain.surveyanswer.domain;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class SurveyAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true, length=100)
    private String content;

    @ManyToOne(targetEntity = SurveyQuestion.class)
    @JoinColumn(name = "survey_question_id", nullable = false)
    private SurveyQuestion surveyQuestion;

    @ManyToOne(targetEntity = QuestionSelect.class)
    @JoinColumn(name = "question_select_id", nullable = true)
    private QuestionSelect questionSelect;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public void mapSurveyQuestion(SurveyQuestion surveyQuestion){
        this.surveyQuestion = surveyQuestion;
    }

    public void mapQuestionSelect(QuestionSelect questionSelect){
        this.questionSelect = questionSelect;
    }

    public void mapUser(User user){
        this.user = user;
    }

    @Builder
    public SurveyAnswer(String content){
        this.content = content;
    }

}