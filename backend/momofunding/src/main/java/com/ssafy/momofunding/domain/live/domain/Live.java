package com.ssafy.momofunding.domain.live.domain;

import com.ssafy.momofunding.domain.liveState.domain.LiveState;
import com.ssafy.momofunding.domain.projectstate.domain.ProjectState;
import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
public class Live {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length=50)
    private String title;

    @Column(nullable = false, length=100)
    private String content;

    @Column
    private Integer maxViewer;

    @Column
    private Integer totalPlayTime;

    @Column
    private Timestamp startTime;

    @Column(nullable = false)
    private Timestamp registerDate;

    @ManyToOne(targetEntity = LiveState.class)
    @JoinColumn(name = "live_state_id", nullable = false)
    LiveState liveState;

    @Builder
    public Live(String title, String content, Integer maxViewer, Integer totalPlayTime, Timestamp startTime, Timestamp registerDate){
        this.title = title;
        this.content = content;
        this.maxViewer = maxViewer;
        this.totalPlayTime = totalPlayTime;
        this.startTime = startTime;
        this.registerDate = registerDate;
    }


}