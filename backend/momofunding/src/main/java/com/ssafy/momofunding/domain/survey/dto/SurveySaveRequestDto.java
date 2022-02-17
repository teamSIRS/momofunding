package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class SurveySaveRequestDto {

    private Long projectId;
    private String title;
    private String content;
    private LocalDateTime endDate;

    @Builder
    public SurveySaveRequestDto(String title, String content, LocalDateTime endDate, Long projectId){
        this.title = title;
        this.content = content;
        this.endDate = endDate;
        this.projectId = projectId;
    }

    public Survey toEntity(){
        return Survey.builder()
                .title(title)
                .content(content)
                .endDate(endDate)
                .build();
    }
}
