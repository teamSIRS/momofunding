package com.ssafy.momofunding.domain.questionselect.controller;

import com.ssafy.momofunding.domain.questionselect.dto.QuestionSelectSaveRequestDto;
import com.ssafy.momofunding.domain.questionselect.service.QuestionSelectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
@RestController
public class QuestionSelectApiController {
    private final QuestionSelectService questionSelectService;

    @PostMapping("/question-select")
    public ResponseEntity save(@RequestBody QuestionSelectSaveRequestDto questionSelectSaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long questionSelectId = questionSelectService.save(questionSelectSaveRequestDto);
            responseMap.put("QuestionSelectId", questionSelectId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
