package com.ssafy.momofunding.domain.surveyliverecord.controller;

import com.ssafy.momofunding.domain.surveyliverecord.dto.SurveyLiveRecordSaveRequestDto;
import com.ssafy.momofunding.domain.surveyliverecord.service.SurveyLiveRecordService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Tag(name = "Survey Live Record API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/survey-live-records")
public class SurveyLiveRecordApiController {
    private final SurveyLiveRecordService SurveyLiveRecordService;

    @Operation(
            summary = "라이브-설문조사 기록 저장",
            description = "라이브Id, 설문조사Id를 받아 기록 저장"
    )
    @PostMapping("")
    public ResponseEntity saveSurveyLiveRecord(@RequestBody SurveyLiveRecordSaveRequestDto saveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long surveyLiveRecordId = SurveyLiveRecordService.saveLiveSurveyRecord(saveRequestDto);
            responseMap.put("surveyLiveRecordId", surveyLiveRecordId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
