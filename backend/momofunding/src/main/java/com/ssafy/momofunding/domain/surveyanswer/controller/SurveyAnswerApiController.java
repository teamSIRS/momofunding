package com.ssafy.momofunding.domain.surveyanswer.controller;

import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerSaveRequestDto;
import com.ssafy.momofunding.domain.surveyanswer.service.SurveyAnswerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Tag(name = "Survey Answer API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/survey-answers")
public class SurveyAnswerApiController {
    private final SurveyAnswerService surveyAnswerService;

    @Operation(
            summary = "설문조사 답변 단일 저장",
            description = "설문조사 답변 정보를 받아 저장 (질문 보기 ID의 경우 null이 아닐 시 저장)"
    )
    @PostMapping("")
    public ResponseEntity saveSurveyAnswer(@RequestBody SurveyAnswerSaveRequestDto saveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long surveyAnswerId = surveyAnswerService.saveSurveyAnswer(saveRequestDto);
            responseMap.put("surveyAnswerId", surveyAnswerId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
