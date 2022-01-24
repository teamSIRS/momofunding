package com.ssafy.momofunding.domain.live.controller;

import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.dto.LiveSaveRequestDto;
import com.ssafy.momofunding.domain.live.dto.LiveUpdateRequestDto;
import com.ssafy.momofunding.domain.live.service.LiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@RestController
public class LiveApiController {
    private final LiveService liveService;

    @GetMapping("/lives")
    public ResponseEntity findBySort(@RequestParam String sortValue) {
        List<LiveResponseDto> lives = new ArrayList<>();

        if (sortValue.equals("date")) {
            Sort sort = Sort.by(Sort.Direction.DESC, "id");
            lives = liveService.findBySort(sort);
        }

        if (lives.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

        return ResponseEntity.status(HttpStatus.OK).body(lives);
    }

    @PostMapping("/lives")
    public ResponseEntity save(@RequestBody LiveSaveRequestDto liveSaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long liveId = liveService.save(liveSaveRequestDto);
            responseMap.put("liveId", liveId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @GetMapping("/lives/projectCategory/{projectCategoryId}")
    public ResponseEntity findAllByCategoryId(@PathVariable Long projectCategoryId) {
        Map<String, Object> responseMap = new HashMap<>();
        List<LiveResponseDto> lives = new ArrayList<>();
        Sort sort = Sort.by(Sort.Direction.DESC, "id");

        try {
            lives = liveService.findAllByProjectCategoryId(projectCategoryId, sort);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        if (lives.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

        return ResponseEntity.status(HttpStatus.OK).body(lives);
    }

    @PutMapping("/lives/{liveId}")
    public ResponseEntity update(@RequestBody LiveUpdateRequestDto liveUpdateRequestDto, @PathVariable Long liveId){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            liveService.update(liveUpdateRequestDto, liveId);
        } catch(IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
