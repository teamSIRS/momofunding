package com.ssafy.momofunding.domain.creator.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Creator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @OneToOne(targetEntity = Project.class)
    @JoinColumn(name = "project_id")
    Project project;

    @Column(length=20)
    String creatorName;

    @Column(length=500)
    String creatorImageUrl;

    @Column(length=100)
    String creatorContent;

    @Column(length=30)
    String email;

    @Column(length=30)
    String tel;

    @Column(length=30)
    String account;

    public void mapProject(Project p){
        this.project = p;
    }

    @Builder
    public Creator(Long id, String creatorName, String creatorImageUrl, String creatorContent,
                   String email, String tel, String account){
        this.id = id;
        this.creatorName = creatorName;
        this.creatorImageUrl = creatorImageUrl;
        this.creatorContent = creatorContent;
        this.email = email;
        this.tel = tel;
        this.account = account;
    }
}
