package com.ssafy.momofunding.domain.survey.dto;

import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class SurveyListResponseDto {

    private Long id;
    private String title;
    private LocalDateTime endDate;

    public SurveyListResponseDto(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.endDate = survey.getEndDate();
    }

    @Builder
    public SurveyListResponseDto(Long id, String title, LocalDateTime endDate) {
        this.id = id;
        this.title = title;
        this.endDate = endDate;
    }
}
