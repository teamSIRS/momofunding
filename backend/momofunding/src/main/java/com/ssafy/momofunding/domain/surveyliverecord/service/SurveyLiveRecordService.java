package com.ssafy.momofunding.domain.surveyliverecord.service;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.live.repository.LiveRepository;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.questiontype.repository.QuestionTypeRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyliverecord.domain.SurveyLiveRecord;
import com.ssafy.momofunding.domain.surveyliverecord.dto.SurveyLiveRecordSaveRequestDto;
import com.ssafy.momofunding.domain.surveyliverecord.repository.SurveyLiveRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class SurveyLiveRecordService {

    private final SurveyLiveRecordRepository SurveyLiveRecordRepository;
    private final SurveyRepository surveyRepository;
    private final LiveRepository liveRepository;

    @Transactional
    public Long saveLiveSurveyRecord(SurveyLiveRecordSaveRequestDto saveRequestDto){
        Long surveyId = saveRequestDto.getSurveyId();
        Long liveId = saveRequestDto.getLiveId();

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 설문조사 번호 입니다. surveyId : " + surveyId));

        Live live = liveRepository.findById(liveId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 질문 타입 번호 입니다. liveId : " + liveId));

        SurveyLiveRecord SurveyLiveRecord = new SurveyLiveRecord();
        SurveyLiveRecord.mapSurvey(survey);
        SurveyLiveRecord.mapLive(live);

        return SurveyLiveRecordRepository.save(SurveyLiveRecord).getId();
    }

}
