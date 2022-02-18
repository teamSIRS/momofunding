package com.ssafy.momofunding.domain.survey.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Survey extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=50)
    private String title;

    @Column(nullable = false, length=100)
    private String content;

    @Column(nullable = false)
    private LocalDateTime endDate;

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
        this.endDate = updateRequestDto.getEndDate();
    }

    @Builder
    public Survey(String title, String content, LocalDateTime endDate){
        this.title = title;
        this.content = content;
        this.endDate = endDate;
    }

}