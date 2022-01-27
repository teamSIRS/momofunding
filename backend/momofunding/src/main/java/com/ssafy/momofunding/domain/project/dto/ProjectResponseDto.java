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
    private String mainImageUrl;
    private Integer currentAmount;
    private Integer popularity;
    private Timestamp expirationDate;

    @Builder
    public ProjectResponseDto(Long id, String projectName, Integer fundingGoal, String mainImageUrl,
                              Integer currentAmount, Integer popularity, Timestamp expirationDate){
        this.id = id;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.mainImageUrl = mainImageUrl;
        this.currentAmount = currentAmount;
        this.popularity = popularity;
        this.expirationDate = expirationDate;
    }

    public ProjectResponseDto(Project projectEntity){
        this.id = projectEntity.getId();
        this.projectName = projectEntity.getProjectName();
        this.fundingGoal = projectEntity.getFundingGoal();
        this.mainImageUrl = projectEntity.getMainImageUrl();
        this.currentAmount = projectEntity.getCurrentAmount();
        this.popularity = projectEntity.getPopularity();
        this.expirationDate = projectEntity.getExpirationDate();
    }
}
