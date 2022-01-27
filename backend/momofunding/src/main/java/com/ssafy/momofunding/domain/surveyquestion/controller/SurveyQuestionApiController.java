package com.ssafy.momofunding.domain.surveyquestion.controller;

import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionSaveRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionUpdateRequestDto;
import com.ssafy.momofunding.domain.surveyquestion.service.SurveyQuestionService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Tag(name = "Survey Question API")
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
