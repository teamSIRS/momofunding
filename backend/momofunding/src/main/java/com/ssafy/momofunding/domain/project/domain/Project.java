package com.ssafy.momofunding.domain.project.domain;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.project.dto.ProjectUpdateRequestDto;
import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import com.ssafy.momofunding.domain.projectstate.domain.ProjectState;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne(targetEntity = ProjectState.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_state_id")
    ProjectState projectState;

    @ManyToOne(targetEntity = ProjectCategory.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_category_id")
    ProjectCategory projectCategory;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    User user;

    @OneToOne(mappedBy = "project", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    Creator creator;

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    List<Live> lives = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    List<Reward> rewards = new ArrayList<>();


    @Column(length=150)
    String projectName;

    @Column
    Integer fundingGoal;

    @Column(columnDefinition = "varchar(500) default ''")
    String mainImageUrl;

    @Column(columnDefinition = "varchar(500) default ''")
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

    @Column
    Timestamp registerDate;

    @Column(columnDefinition = "boolean default false")
    Boolean isLivePlaying;

    @PrePersist
    public void initializer(){
        mainImageUrl = "";
        subImageUrl = "";
        currentAmount = 0;
        fundingGoal = 0;
        isLivePlaying = false;
    }

    @Formula("(current_amount/funding_goal)*100")
    Integer popularity;

    @Builder
    public Project(Long id, String projectName, Integer fundingGoal, String mainImageUrl, String subImageUrl,
                   String summary, String projectContent, Integer currentAmount, Timestamp startDate,
                   Timestamp expirationDate, Timestamp registerDate){
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
        this.registerDate = registerDate;
    }

    public void mapProjectState(ProjectState ps){
        this.projectState = ps;
    }

    public void mapProjectCategory(ProjectCategory pc){
        this.projectCategory = pc;
    }

    public void mapUser(User u){
        this.user = u;
    }

    public void updateProject(ProjectUpdateRequestDto psr){
        this.projectName = psr.getProjectName();
        this.fundingGoal = psr.getFundingGoal();
        this.mainImageUrl = psr.getMainImageUrl();
        this.subImageUrl = psr.getSubImageUrl();
        this.summary = psr.getSummary();
        this.projectContent = psr.getProjectContent();
        this.expirationDate = psr.getExpirationDate();
    }

    public void updateIsLivePlaying(Boolean isLivePlaying){
        this.isLivePlaying = isLivePlaying;
    }

    public void addCurrentAmount(Integer amount){
        this.currentAmount+=amount;
    }
}
