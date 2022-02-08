package com.ssafy.momofunding.domain.live.controller;

import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.dto.LiveSaveRequestDto;
import com.ssafy.momofunding.domain.live.dto.LiveSummaryUpdateRequestDto;
import com.ssafy.momofunding.domain.live.service.LiveService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "Live API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/lives")
public class LiveApiController {
    private final LiveService liveService;

    @Operation(
            summary = "정렬 별 진행중인 라이브 다중 조회",
            description = "최신 순, 시청자 순(추가 예정)에 따른 진행중인 라이브 리스트를 조회 (진행중이 아니면 조회되지 않음)"
    )
    @Parameter(name = "sortValue", description = "정렬 방식", required = true)
    @GetMapping("")
    public ResponseEntity findLiveBySort(@RequestParam String sortValue) {

        List<LiveResponseDto> lives = new ArrayList<>();
        if (sortValue.equals("date"))
            lives = liveService.findAllOrderById();
        else if (sortValue.equals("viewer"))
            lives = liveService.findAllOrderByViewerCount();


        if (lives.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

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
            summary = "카테고리 별 라이브 다중 조회",
            description = "카테고리 ID에 해당하는 라이브 리스트를 리턴"
    )
    @Parameter(name = "projectCategoryId", description = "카테고리 Id", required = true)
    @GetMapping("/projectCategory/{projectCategoryId}")
    public ResponseEntity findLivesByCategoryId(@PathVariable Long projectCategoryId) {
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


}
