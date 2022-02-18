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
public class ProjectUpdateRequestDto {

    private Long projectCategoryId;
    private String projectName;
    private Integer fundingGoal;
    private String mainImageUrl;
    private String subImageUrl;
    private String summary;
    private String projectContent;
    private LocalDateTime expirationDate;

    @Builder
    public ProjectUpdateRequestDto(Long projectCategoryId, String projectName, Integer fundingGoal,
                                   String mainImageUrl, String subImageUrl, String summary,
                                   String projectContent, LocalDateTime expirationDate){

        this.projectCategoryId = projectCategoryId;
        this.projectName = projectName;
        this.fundingGoal = fundingGoal;
        this.mainImageUrl = mainImageUrl;
        this.subImageUrl = subImageUrl;
        this.summary = summary;
        this.projectContent = projectContent;
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
                .expirationDate(expirationDate)
                .build();
    }
}
