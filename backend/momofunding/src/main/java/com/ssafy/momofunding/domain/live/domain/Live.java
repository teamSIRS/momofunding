package com.ssafy.momofunding.domain.live.domain;

import com.ssafy.momofunding.domain.live.dto.LiveUpdateRequestDto;
import com.ssafy.momofunding.domain.liveState.domain.LiveState;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
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

    @ManyToOne(targetEntity = ProjectCategory.class)
    @JoinColumn(name = "project_category_id", nullable = false)
    ProjectCategory projectCategory;

    @ManyToOne(targetEntity = Project.class)
    @JoinColumn(name = "project_id", nullable = false)
    Project project;

    public void mapLiveState(LiveState liveState){
        this.liveState = liveState;
    }

    public void mapProjectCategory(ProjectCategory projectCategory){
        this.projectCategory = projectCategory;
    }

    public void mapProject(Project project){
        this.project = project;
    }

    public void update(LiveUpdateRequestDto liveUpdateRequestDto) {
        this.title = liveUpdateRequestDto.getTitle();
        this.content = liveUpdateRequestDto.getContent();
        this.maxViewer = liveUpdateRequestDto.getMaxViewer();
        this.totalPlayTime = liveUpdateRequestDto.getTotalPlayTime();
    }

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