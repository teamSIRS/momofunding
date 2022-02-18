package com.ssafy.momofunding.domain.project.dto;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
public class ProjectDetailResponseDto {
    private Long id;
    private Long projectStateId;
    private Long projectCategoryId;
    private Long userId;
    private String projectName;
    private Integer fundingGoal;
    private String mainImageUrl;
    private String subImageUrl;
    private String summary;
    private String projectContent;
    private Integer currentAmount;
    private Integer popularity;
    private LocalDateTime expirationDate;
    private Boolean isLivePlaying;

    @Builder
    public ProjectDetailResponseDto(Long id, Long projectStateId, Long projectCategoryId, Long userId,
                                    String projectName, Integer fundingGoal, String mainImageUrl, String subImageUrl,
                                    String summary, String projectContent, Integer currentAmount, Integer popularity,
                                    LocalDateTime expirationDate, Boolean isLivePlaying){
        this.id = id;
        this.projectStateId = projectStateId;
        this.projectCategoryId = projectCategoryId;
        this.userId = userId;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.mainImageUrl = mainImageUrl;
        this.subImageUrl = subImageUrl;
        this.summary = summary;
        this.projectContent = projectContent;
        this.currentAmount = currentAmount;
        this.popularity = popularity;
        this.expirationDate = expirationDate;
        this.isLivePlaying = isLivePlaying;

    }

    public ProjectDetailResponseDto(Project projectEntity){
        this.id = projectEntity.getId();
        this.projectStateId = projectEntity.getProjectState().getId();
        if(projectEntity.getProjectCategory() != null) this.projectCategoryId = projectEntity.getProjectCategory().getId();
        else this.projectCategoryId = 0L;
        this.userId = projectEntity.getUser().getId();
        this.projectName = projectEntity.getProjectName();
        this.fundingGoal = projectEntity.getFundingGoal();
        this.mainImageUrl = projectEntity.getMainImageUrl();
        this.subImageUrl = projectEntity.getSubImageUrl();
        this.summary = projectEntity.getSummary();
        this.projectContent = projectEntity.getProjectContent();
        this.currentAmount = projectEntity.getCurrentAmount();
        this.popularity = projectEntity.getPopularity();
        this.expirationDate = projectEntity.getExpirationDate();
        this.isLivePlaying = projectEntity.getIsLivePlaying();
    }
}
