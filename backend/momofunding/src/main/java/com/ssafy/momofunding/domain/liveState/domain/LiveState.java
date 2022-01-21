package com.ssafy.momofunding.domain.liveState.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
public class LiveState {

    @Id
    private Long id;

    @Column(nullable = false, length=10)
    private String stateName;

    

    @Builder
    public LiveState(String stateName){
        this.stateName = stateName;
    }

}