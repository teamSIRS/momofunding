package com.ssafy.momofunding.domain.survey.controller;

import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
@RestController
public class SurveyApiController {
    private final SurveyService surveyService;

    @PostMapping("/surveys")
    public ResponseEntity save(@RequestBody SurveySaveRequestDto surveySaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long surveyId = surveyService.save(surveySaveRequestDto);
            responseMap.put("surveyId", surveyId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
