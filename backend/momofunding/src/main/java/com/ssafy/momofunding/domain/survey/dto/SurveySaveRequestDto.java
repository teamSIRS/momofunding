package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class SurveySaveRequestDto {

    private Long projectId;
    private String title;
    private String content;
    private Timestamp startDate;
    private Timestamp endDate;

    @Builder
    public SurveySaveRequestDto(String title, String content, Timestamp startDate, Timestamp endDate, Long projectId){
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectId = projectId;
    }

    public Survey toEntity(){
        return Survey.builder()
                .title(title)
                .content(content)
                .startDate(startDate)
                .endDate(endDate)
                .build();
    }
}
