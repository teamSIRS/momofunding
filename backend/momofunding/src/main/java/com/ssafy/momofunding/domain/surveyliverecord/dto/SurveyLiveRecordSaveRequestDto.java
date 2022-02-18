package com.ssafy.momofunding.domain.surveyliverecord.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SurveyLiveRecordSaveRequestDto {

    private Long liveId;
    private Long surveyId;

    @Builder
    public SurveyLiveRecordSaveRequestDto(Long liveId, Long surveyId){
        this.liveId = liveId;
        this.surveyId = surveyId;
    }
}
