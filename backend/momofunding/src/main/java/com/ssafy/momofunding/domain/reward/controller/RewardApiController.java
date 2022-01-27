package com.ssafy.momofunding.domain.reward.controller;

import com.ssafy.momofunding.domain.reward.dto.RewardResponseDto;
import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.dto.RewardUpdateRequestDto;
import com.ssafy.momofunding.domain.reward.service.RewardService;
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

@Tag(name = "Reward API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/rewards")
public class RewardApiController {
    //    @Operation(
//            summary = "이메일 중복 확인",
//            description = "이미 동일한 이메일이 있다면 true, 없다면 false 리턴"
//    )
//    @Parameter(name = "email", description = "중복 체크 할 이메일", required = true)

    private final RewardService rewardService;

    @Operation(
            summary = "리워드 정보 저장",
            description = "리워드 정보 저장"
    )
    @PostMapping("")
    public ResponseEntity<Object> saveReward(@RequestBody RewardSaveRequestDto rewardSaveRequestDto) {
        try {
            rewardService.saveReward(rewardSaveRequestDto);
        } catch (IllegalArgumentException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "프로젝트 당 리워드 리스트 조회",
            description = "프로젝트 Id를 받고 리워드 리스트를 리턴"
    )
    @Parameter(name = "projectId", description = "리워드를 조회할 프로젝트의 Id", required = true)
    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Object> findRewardListByProject(@PathVariable Long projectId) {
        List<RewardResponseDto> rewards;
        try {
            rewards = rewardService.findRewardListByProject(projectId);
        } catch (IllegalArgumentException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        if (rewards.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(rewards);
    }

    @Operation(
            summary = "리워드 수정",
            description = "리워드 Id에 해당하는 리워드의 정보 수정"
    )
    @Parameter(name = "rewardId", description = "수정할 리워드 Id", required = true)
    @PutMapping("/{rewardId}")
    public ResponseEntity<Object> updateReward(@PathVariable Long rewardId, @RequestBody RewardUpdateRequestDto rewardUpdateRequestDto) {
        try {
            rewardService.updateReward(rewardId, rewardUpdateRequestDto);
        } catch (IllegalArgumentException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "리워드 삭제",
            description = "리워드 Id에 해당하는 리워드의 정보 삭제"
    )
    @Parameter(name = "rewardId", description = "삭제할 리워드 Id", required = true)
    @DeleteMapping("/{rewardId}")
    public ResponseEntity<Object> deleteReward(@PathVariable Long rewardId) {
        try {
            rewardService.deleteReward(rewardId);
        } catch (EmptyResultDataAccessException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", "잘못된 리워드 번호입니다:: rewardId-" + rewardId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
