package com.ssafy.momofunding.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Test {

    // 테스트 하고 다들 지우세요
    @Id
    int id;

    @Column(nullable=false)
    String testString;


}
