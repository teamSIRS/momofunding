package com.ssafy.momofunding.domain.live.domain;

import com.ssafy.momofunding.domain.live.dto.LiveSummaryUpdateRequestDto;
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
    private Integer viewerCount;

    @Column(nullable = false, length=100)
    private String sessionId;

    @Column
    private Long totalPlayTime;

    @Column(nullable = false)
    private Timestamp registerDate;

    @ManyToOne(targetEntity = LiveState.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "live_state_id", nullable = false)
    LiveState liveState;

    @ManyToOne(targetEntity = ProjectCategory.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_category_id", nullable = false)
    ProjectCategory projectCategory;

    @ManyToOne(targetEntity = Project.class, fetch = FetchType.LAZY)
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

    public void updateLiveSummary(LiveSummaryUpdateRequestDto updateRequestDto) {
        this.title = updateRequestDto.getTitle();
        this.content = updateRequestDto.getContent();
    }

    public void updateViewerCount(Integer viewerCount) {
        this.viewerCount = viewerCount;
    }

    public void updateTotalPlayTime(Long time) {
        this.totalPlayTime = time;
    }

    @PrePersist
    public void initializer() {
        this.totalPlayTime = 0L;
        this.viewerCount = 0;
    }

    @Builder
    public Live(String title, String content, Integer viewerCount, Long totalPlayTime, Timestamp registerDate, String sessionId){
        this.title = title;
        this.content = content;
        this.viewerCount = viewerCount;
        this.totalPlayTime = totalPlayTime;
        this.registerDate = registerDate;
        this.sessionId = sessionId;
    }
}