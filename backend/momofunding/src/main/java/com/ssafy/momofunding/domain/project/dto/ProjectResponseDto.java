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
public class ProjectResponseDto {
    private Long id;
    private String projectName;
    private Integer fundingGoal;
    private String subImageUrl;
    private Integer currentAmount;
    private Integer popularity;
    private Timestamp expirationDate;

    private String creatorName;

    @Builder
    public ProjectResponseDto(Long id, String projectName, Integer fundingGoal, String subImageUrl,
                              Integer currentAmount, Integer popularity, Timestamp expirationDate,
                              String creatorName){
        this.id = id;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.subImageUrl = subImageUrl;
        this.currentAmount = currentAmount;
        this.popularity = popularity;
        this.expirationDate = expirationDate;

        this.creatorName = creatorName;
    }

    public ProjectResponseDto(Project projectEntity){
        this.id = projectEntity.getId();
        this.projectName = projectEntity.getProjectName();
        this.fundingGoal = projectEntity.getFundingGoal();
        this.subImageUrl = projectEntity.getSubImageUrl();
        this.currentAmount = projectEntity.getCurrentAmount();
        this.popularity = projectEntity.getPopularity();
        this.expirationDate = projectEntity.getExpirationDate();

        this.creatorName = projectEntity.getCreator().getCreatorName();
    }
}
