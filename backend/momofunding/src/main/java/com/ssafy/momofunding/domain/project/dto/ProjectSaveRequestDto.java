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
public class ProjectSaveRequestDto {

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
    public ProjectSaveRequestDto(Long id, Long projectStateId, Long projectCategoryId, Long userId,
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

    public Project toEntity(){
        return Project.builder()
                .id(id)
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
}
