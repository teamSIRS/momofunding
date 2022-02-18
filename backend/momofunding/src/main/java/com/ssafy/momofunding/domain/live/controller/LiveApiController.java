package com.ssafy.momofunding.domain.live.controller;

import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.dto.LiveSaveRequestDto;
import com.ssafy.momofunding.domain.live.dto.LiveSummaryUpdateRequestDto;
import com.ssafy.momofunding.domain.live.service.LiveService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "Live API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/lives")
public class LiveApiController {
    private final LiveService liveService;

    @Operation(
            summary = "프로젝트 내 종료된 라이브 목록 조회 (== 라이브 기록 조회)",
            description = "프로젝트 Id로 종료된 라이브 조회"
    )
    @Parameter(name = "projectId", description = "프로젝트 Id", required = true)
    @GetMapping("/projects/{projectId}")
    public ResponseEntity findLivesByProjectId(@PathVariable Long projectId) {

        List<LiveResponseDto> lives;
        try {
            lives = liveService.findLivesByProjectId(projectId);
        } catch (IllegalArgumentException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        if (lives.isEmpty())
            ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

        return ResponseEntity.status(HttpStatus.OK).body(lives);
    }

    @Operation(
            summary = "라이브 등록",
            description = "라이브 정보 등록 후 라이브 Id를 리턴"
    )
    @PostMapping("")
    public ResponseEntity saveLive(@RequestBody LiveSaveRequestDto liveSaveRequestDto) {

        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long liveId = liveService.saveLive(liveSaveRequestDto);
            responseMap.put("liveId", liveId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @Operation(
            summary = "라이브 정보 수정",
            description = "라이브 정보를 수정"
    )
    @Parameter(name = "liveId", description = "라이브 Id", required = true)
    @PutMapping("/{liveId}")
    public ResponseEntity updateLiveSummary(@RequestBody LiveSummaryUpdateRequestDto liveUpdateRequestDto, @PathVariable Long liveId) {
        Map<String, Object> responseMap = new HashMap<>();

        try {
            liveService.updateLiveSummary(liveUpdateRequestDto, liveId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "라이브 시청자 수 수정",
            description = "라이브의 현재 시청자 수를 수정"
    )
    @Parameter(name = "liveId", description = "라이브 Id", required = true)
    @PutMapping("/{liveId}/viewerCount")
    public ResponseEntity updateViewerCount(@PathVariable Long liveId, @RequestBody Map<String, Integer> requestBody) {
        Map<String, Object> responseMap = new HashMap<>();

        try {
            liveService.updateViewerCount(liveId, requestBody.get("viewerCount"));
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "라이브 종료 시 호출 api",
            description = "라이브의 종료 시 상태 변경 및 총 시간 계산"
    )
    @Parameter(name = "liveId", description = "라이브 Id", required = true)
    @PutMapping("/{liveId}/endLive")
    public ResponseEntity endLive(@PathVariable Long liveId) {
        Map<String, Object> responseMap = new HashMap<>();


        try {
            liveService.endLive(liveId);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "라이브 검색 결과 조회",
            description = "검색 조건에 따라 라이브 검색 결과 목록을 조회할 수 있다. \n 정렬 조건(최신순-date / 인기순-popularity)"
    )
    @GetMapping("/search")
    public ResponseEntity<Object> searchLivesByConditions(@RequestParam("order") String order,
                                                          @RequestParam(value = "categoryId", required = false) Long categoryId,
                                                          @RequestParam(value = "keyword", required = false) String keyword){
        List<LiveResponseDto> lives = liveService.searchLivesByCondition(order, categoryId, keyword);

        if(lives.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(lives);
    }
}
