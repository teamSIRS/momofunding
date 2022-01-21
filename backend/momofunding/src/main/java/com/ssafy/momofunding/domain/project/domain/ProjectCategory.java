package com.ssafy.momofunding.domain.project.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class ProjectCategory {

    @Id
    Long id;

    @Column(nullable = false, length=50)
    String name;

    @Builder
    public ProjectCategory(String name){
        this.name = name;
    }
}
