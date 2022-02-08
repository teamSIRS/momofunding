package com.ssafy.momofunding.domain.survey.controller;

import com.ssafy.momofunding.domain.survey.dto.SurveyDetailResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyListResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.survey.service.SurveyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Tag(name = "Survey API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/surveys")
public class SurveyApiController {
    private final SurveyService surveyService;


    @Operation(
            summary = "설문조사 저장",
            description = "설문조사 정보를 저장하고 설문조사의 Id를 리턴"
    )
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


    @Operation(
            summary = "설문조사 정보 단일 조회 (질문)",
            description = "설문조사 Id에 해당하는 설문조사 디테일 + 질문 반환"
    )
    @Parameter(name = "surveyId", description = "설문조사 Id", required = true)
    @GetMapping("/{surveyId}")
    public ResponseEntity findSurveyDetailById(@PathVariable Long surveyId) {
        SurveyDetailResponseDto surveyDetailResponseDto;
        try {
            surveyDetailResponseDto = surveyService.findSurveyDetailById(surveyId);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(surveyDetailResponseDto);
    }

    @Operation(
            summary = "설문조사 정보 단일 조회 (질문+답변)",
            description = "설문조사 Id에 해당하는 설문조사 디테일 + 질문 + 답변 반환"
    )
    @Parameter(name = "surveyId", description = "설문조사 Id", required = true)
    @GetMapping("/{surveyId}/answers")
    public ResponseEntity findSurveyDetailByIdWithAnswer(@PathVariable Long surveyId) {
        SurveyDetailResponseDto surveyDetailResponseDto;
        try {
            surveyDetailResponseDto = surveyService.findSurveyDetailByIdWithAnswers(surveyId);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(surveyDetailResponseDto);
    }


    @Operation(
            summary = "설문조사 정보 리스트 조회",
            description = "모든 설문조사 정보 리스트 반환"
    )
    @GetMapping("")
    public ResponseEntity findSurveys() {

        List<SurveyListResponseDto> surveyListResponseDtos;

        try {
            surveyListResponseDtos = surveyService.findSurveys();
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(surveyListResponseDtos);
    }

    @Operation(
            summary = "설문조사 정보 수정",
            description = "설문조사 Id에 해당하는 설문조사 정보 수정"
    )
    @Parameter(name = "surveyId", description = "설문조사 Id", required = true)
    @PutMapping("/{surveyId}")
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

    @Operation(
            summary = "설문조사 정보 단일 삭제",
            description = "설문조사 Id에 해당하는 설문조사 정보 삭제"
    )
    @Parameter(name = "surveyId", description = "설문조사 Id", required = true)
    @DeleteMapping("/{surveyId}")
    public ResponseEntity deleteSurvey(@PathVariable Long surveyId) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            surveyService.deleteSurvey(surveyId);
        } catch (EmptyResultDataAccessException e) {
            responseMap.put("errorMsg", "아이디에 해당하는 설문조사가 없습니다. surveyId : " + surveyId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
