package com.ssafy.momofunding.domain.survey.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

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

    public void mapProject(Project project){
        this.project = project;
    }

    @Builder
    public Survey(String title, String content, Timestamp startDate, Timestamp endDate){
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}