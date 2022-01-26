package com.ssafy.momofunding.domain.reward.controller;

import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.service.RewardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rewards")
public class RewardApiController {

    private final RewardService rewardService;

    @PostMapping("/projects/{projectId}")
    public ResponseEntity<Object> createReward(@PathVariable Long projectId, @RequestBody RewardSaveRequestDto rewardSaveRequestDto){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            rewardService.createReward(projectId, rewardSaveRequestDto);
        } catch (IllegalArgumentException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }



}
