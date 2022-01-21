package com.ssafy.momofunding.domain.projectcategory.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class ProjectCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, length=20)
    String name;

    @Builder
    public ProjectCategory(String name){
        this.name = name;
    }
}
