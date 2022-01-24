package com.ssafy.momofunding.domain.project.domain;

import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import com.ssafy.momofunding.domain.projectstate.domain.ProjectState;
import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @ManyToOne(targetEntity = ProjectState.class)
    @JoinColumn(name = "project_state_id")
    ProjectState projectState;

    @ManyToOne(targetEntity = ProjectCategory.class)
    @JoinColumn(name = "project_category_id")
    ProjectCategory projectCategory;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id", nullable = false)
    User user;


    @Column(length=150)
    String projectName;

    @Column
    Integer fundingGoal;

    @Column(length=500)
    String mainImageUrl;

    @Column(length=500)
    String subImageUrl;

    @Column(length=500)
    String summary;

    @Column(length=5000)
    String projectContent;

    @Column(columnDefinition = "integer default 0")
    Integer currentAmount;

    @Column
    Timestamp startDate;

    @Column
    Timestamp expirationDate;

    @Column(columnDefinition = "integer default 0")
    Integer likeCount;

    @Column
    Timestamp registerDate;

    public void mapProjectState(ProjectState ps){
        this.projectState = ps;
    }

    public void mapProjectCategory(ProjectCategory pc){
        this.projectCategory = pc;
    }

    public void mapUser(User u){
        this.user = u;
    }

    @Builder
    public Project(Long id, String projectName, Integer fundingGoal, String mainImageUrl, String subImageUrl,
                   String summary, String projectContent, Integer currentAmount, Timestamp startDate,
                   Timestamp expirationDate, Integer likeCount, Timestamp registerDate){
        this.id = id;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.mainImageUrl = mainImageUrl;
        this.subImageUrl = subImageUrl;
        this.summary = summary;
        this.projectContent = projectContent;
        this.currentAmount = currentAmount;
        this.startDate = startDate;
        this.expirationDate = expirationDate;
        this.likeCount = likeCount;
        this.registerDate = registerDate;
    }
}
