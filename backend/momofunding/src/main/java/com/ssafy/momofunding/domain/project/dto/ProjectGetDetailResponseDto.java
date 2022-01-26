package com.ssafy.momofunding.domain.project.dto;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@NoArgsConstructor
@Setter
@Getter
public class ProjectGetDetailResponseDto {
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
    private Timestamp startDate;
    private Timestamp expirationDate;
    private Integer likeCount;
    private Timestamp registerDate;

    @Builder
    public ProjectGetDetailResponseDto(Long id, Long projectStateId, Long projectCategoryId, Long userId,
                                       String projectName, Integer fundingGoal, String mainImageUrl, String subImageUrl,
                                       String summary, String projectContent, Integer currentAmount, Timestamp startDate,
                                       Timestamp expirationDate, Integer likeCount, Timestamp registerDate){
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
        this.startDate = startDate;
        this.expirationDate = expirationDate;
        this.likeCount = likeCount;
        this.registerDate = registerDate;

    }

    public ProjectGetDetailResponseDto(Project projectEntity){
        this.id = projectEntity.getId();
        this.projectStateId = projectEntity.getProjectState().getId();
        this.projectCategoryId = projectEntity.getProjectCategory().getId();
        this.userId = projectEntity.getUser().getId();
        this.projectName = projectEntity.getProjectName();
        this.fundingGoal = projectEntity.getFundingGoal();
        this.mainImageUrl = projectEntity.getMainImageUrl();
        this.subImageUrl = projectEntity.getSubImageUrl();
        this.summary = projectEntity.getSummary();
        this.projectContent = projectEntity.getProjectContent();
        this.currentAmount = projectEntity.getCurrentAmount();
        this.startDate = projectEntity.getStartDate();
        this.expirationDate = projectEntity.getExpirationDate();
        this.likeCount = projectEntity.getLikeCount();
        this.registerDate = projectEntity.getRegisterDate();
    }
}
