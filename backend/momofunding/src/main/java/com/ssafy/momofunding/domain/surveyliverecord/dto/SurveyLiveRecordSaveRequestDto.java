package com.ssafy.momofunding.domain.surveyliverecord.dto;

import com.ssafy.momofunding.domain.surveyliverecord.domain.SurveyLiveRecord;
import lombok.Builder;
import lombok.Getter;

@Getter
public class SurveyLiveRecordSaveRequestDto {

    private Long liveId;
    private Long surveyId;

    @Builder
    public SurveyLiveRecordSaveRequestDto(Long liveId, Long surveyId){
        this.liveId = liveId;
        this.surveyId = surveyId;
    }
}
