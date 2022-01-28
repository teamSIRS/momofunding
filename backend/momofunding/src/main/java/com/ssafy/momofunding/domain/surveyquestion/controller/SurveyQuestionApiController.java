package com.ssafy.momofunding.domain.surveyquestion.controller;

import com.ssafy.momofunding.domain.survey.dto.SurveyResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionSaveRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionUpdateRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.service.SurveyQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;


@RequiredArgsConstructor
@RestController
@RequestMapping("/survey-questions")
public class SurveyQuestionApiController {
    private final SurveyQuestionService surveyQuestionService;

    @PostMapping("")
    public ResponseEntity saveSurveyQuestion(@RequestBody SurveyQuestionSaveRequestDto surveyQuestionSaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long surveyId = surveyQuestionService.save(surveyQuestionSaveRequestDto);
            responseMap.put("surveyQuestionId", surveyId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @GetMapping("/{surveyQuestionId}")
    public ResponseEntity findSurveyQuestionById(@PathVariable Long surveyQuestionId) {

        SurveyQuestionResponseDto surveyQuestionResponseDto;

        try {
            surveyQuestionResponseDto = surveyQuestionService.findSurveyQuestionById(surveyQuestionId);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(surveyQuestionResponseDto);
    }

    @PutMapping("/{surveyQuestionId}")
    public ResponseEntity updateSurveyQuestion(@PathVariable Long surveyQuestionId, @RequestBody SurveyQuestionUpdateRequestDto updateRequestDto) {
        Map<String, Object> responseMap = new HashMap<>();

        try {
            surveyQuestionService.updateSurveyQuestion(updateRequestDto, surveyQuestionId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

}
