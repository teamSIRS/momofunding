package com.ssafy.momofunding.domain.creator.domain;

import com.ssafy.momofunding.domain.creator.dto.CreatorUpdateRequestDto;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Creator extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToOne(targetEntity = Project.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    Project project;

    @Column(length=20)
    String creatorName;

    @Column(columnDefinition = "varchar(500) default ''")
    String creatorImageUrl;

    @Column(columnDefinition = "varchar(500) default ''")
    String creatorImagePath;

    @Column(length=100)
    String creatorContent;

    @Column(length=30)
    String email;

    @Column(length=30)
    String tel;

    @Column(length=30)
    String account;

    @PrePersist
    public void initializer(){
        creatorImageUrl = "";
        creatorImagePath = "";
    }

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

    public void updateCreator(CreatorUpdateRequestDto cur){
        this.creatorName = cur.getCreatorName();
        this.creatorImageUrl = cur.getCreatorImageUrl();
        this.creatorContent = cur.getCreatorContent();
        this.email = cur.getEmail();
        this.tel = cur.getTel();
        this.account = cur.getAccount();
    }

    public void updateCreatorImageUrl(String url){
        this.creatorImageUrl = url;
    }
}
