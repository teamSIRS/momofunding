package com.ssafy.momofunding.domain.survey.controller;

import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.survey.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
@RestController
@RequestMapping("/surveys")
public class SurveyApiController {
    private final SurveyService surveyService;

    @PostMapping("")
    public ResponseEntity saveSurvey(@RequestBody SurveySaveRequestDto surveySaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long surveyId = surveyService.saveSurvey(surveySaveRequestDto);
            responseMap.put("surveyId", surveyId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @PutMapping("{surveyId}")
    public ResponseEntity updateSurvey(@RequestBody SurveyUpdateRequestDto surveyUpdateRequestDto, @PathVariable Long surveyId) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            surveyService.updateSurvey(surveyUpdateRequestDto, surveyId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
