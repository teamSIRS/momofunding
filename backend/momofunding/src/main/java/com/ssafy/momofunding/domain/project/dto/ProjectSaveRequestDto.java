package com.ssafy.momofunding.domain.project.dto;

import com.ssafy.momofunding.domain.project.domain.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@Getter
public class ProjectSaveRequestDto {

    private Long projectCategoryId;
    private Long userId;
    private String projectName;
    private int fundingGoal;
    private String mainImageUrl;
    private String subImageUrl;
    private String summary;
    private String projectContent;
    private int currentAmount;
    private Timestamp startDate;
    private Timestamp expirationDate;
    private int likeCount;
    private Timestamp registerDate;

    @Builder
    public ProjectSaveRequestDto(Long projectCategoryId, Long userId, String projectName,
                                 int fundingGoal, String mainImageUrl, String subImageUrl,
                                 String summary, String projectContent, int currentAmount,
                                 Timestamp startDate, Timestamp expirationDate, int likeCount,
                                 Timestamp registerDate){
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

    public Project toEntity(){
        return Project.builder()
                .projectName(projectName)
                .fundingGoal(fundingGoal)
                .mainImageUrl(mainImageUrl)
                .subImageUrl(subImageUrl)
                .summary(summary)
                .projectContent(projectContent)
                .currentAmount(currentAmount)
                .startDate(startDate)
                .expirationDate(expirationDate)
                .likeCount(likeCount)
                .registerDate(registerDate)
                .build();
    }


    @Override
    public String toString() {
        return "ProjectSaveRequestDto{" +
                "projectCategoryId=" + projectCategoryId +
                ", userId=" + userId +
                ", projectName='" + projectName + '\'' +
                ", fundingGoal=" + fundingGoal +
                ", mainImageUrl='" + mainImageUrl + '\'' +
                ", subImageUrl='" + subImageUrl + '\'' +
                ", summary='" + summary + '\'' +
                ", projectContent='" + projectContent + '\'' +
                ", currentAmount=" + currentAmount +
                ", startDate=" + startDate +
                ", expirationDate=" + expirationDate +
                ", likeCount=" + likeCount +
                ", registerDate=" + registerDate +
                '}';
    }
}
