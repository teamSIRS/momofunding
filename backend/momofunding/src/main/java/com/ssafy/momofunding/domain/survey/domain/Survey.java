package com.ssafy.momofunding.domain.survey.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=50)
    private String title;

    @Column(nullable = false, length=100)
    private String content;

    @Column(nullable = false)
    private Timestamp startDate;

    @Column(nullable = false)
    private Timestamp endDate;

    @ManyToOne(targetEntity = Project.class)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @OneToMany(mappedBy = "survey", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SurveyQuestion> surveyQuestions;

    public void mapProject(Project project){
        this.project = project;
    }

    public void updateSurvey(SurveyUpdateRequestDto updateRequestDto) {
        this.content = updateRequestDto.getContent();
        this.title = updateRequestDto.getTitle();
        this.startDate = updateRequestDto.getStartDate();
        this.endDate = updateRequestDto.getEndDate();
    }

    @Builder
    public Survey(String title, String content, Timestamp startDate, Timestamp endDate){
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}