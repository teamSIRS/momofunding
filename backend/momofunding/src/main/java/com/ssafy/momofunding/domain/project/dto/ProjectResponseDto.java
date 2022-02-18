package com.ssafy.momofunding.domain.project.dto;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
public class ProjectResponseDto {
    private Long id;
    private Long projectStateId;
    private String projectName;
    private Integer fundingGoal;
    private String subImageUrl;
    private Integer currentAmount;
    private Integer popularity;
    private Boolean isLivePlaying;
    private LocalDateTime expirationDate;

    private String creatorName;

    @Builder
    public ProjectResponseDto(Long id, Long projectStateId, String projectName, Integer fundingGoal,
                              String subImageUrl, Integer currentAmount, Integer popularity,
                              LocalDateTime expirationDate, String creatorName, Boolean isLivePlaying){
        this.id = id;
        this.projectStateId = projectStateId;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.subImageUrl = subImageUrl;
        this.currentAmount = currentAmount;
        this.popularity = popularity;
        this.expirationDate = expirationDate;
        this.creatorName = creatorName;
        this.isLivePlaying = isLivePlaying;
    }

    public ProjectResponseDto(Project projectEntity){
        this.id = projectEntity.getId();
        this.projectStateId = projectEntity.getProjectState().getId();
        this.projectName = projectEntity.getProjectName();
        this.fundingGoal = projectEntity.getFundingGoal();
        this.subImageUrl = projectEntity.getSubImageUrl();
        this.currentAmount = projectEntity.getCurrentAmount();
        this.popularity = projectEntity.getPopularity();
        this.expirationDate = projectEntity.getExpirationDate();
        this.creatorName = projectEntity.getCreator().getCreatorName();
        this.isLivePlaying = projectEntity.getIsLivePlaying();
    }
}
