package com.ssafy.momofunding.domain.questiontype.domain;

import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class QuestionType {

    @Id
    private Long id;

    @Column(nullable = false, length=10)
    private String name;

    @Builder
    public QuestionType(String name){
        this.name = name;
    }

}