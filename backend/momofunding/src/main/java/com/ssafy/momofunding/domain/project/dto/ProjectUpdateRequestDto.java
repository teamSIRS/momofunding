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
public class ProjectUpdateRequestDto {

    private Long projectCategoryId;
    private String projectName;
    private Integer fundingGoal;
    private String mainImageUrl;
    private String subImageUrl;
    private String summary;
    private String projectContent;
    private Integer currentAmount;
    private Timestamp expirationDate;

    @Builder
    public ProjectUpdateRequestDto(Long projectCategoryId, String projectName, Integer fundingGoal,
                                   String mainImageUrl, String subImageUrl, String summary,
                                   String projectContent, Integer currentAmount, Timestamp expirationDate){

        this.projectCategoryId = projectCategoryId;

        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.mainImageUrl = mainImageUrl;
        this.subImageUrl = subImageUrl;
        this.summary = summary;
        this.projectContent = projectContent;
        this.currentAmount = currentAmount;
        this.expirationDate = expirationDate;
    }

    public Project toEntity(){
        return Project.builder()
                .projectName(projectName)
                .fundingGoal(fundingGoal)
                .mainImageUrl(mainImageUrl)
                .subImageUrl(subImageUrl)
                .summary(summary)
                .projectContent(projectContent)
                .currentAmount(currentAmount)
                .expirationDate(expirationDate)
                .build();
    }
}
