package com.ssafy.momofunding.domain.reward.controller;

import com.ssafy.momofunding.domain.reward.dto.RewardGetListResponseDto;
import com.ssafy.momofunding.domain.reward.dto.RewardSaveRequestDto;
import com.ssafy.momofunding.domain.reward.service.RewardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rewards")
public class RewardApiController {

    private final RewardService rewardService;

    @PostMapping("")
    public ResponseEntity<Object> createReward(@RequestBody RewardSaveRequestDto rewardSaveRequestDto){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            rewardService.createReward(rewardSaveRequestDto);
        } catch (IllegalArgumentException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Object> getRewardListByProject(@PathVariable Long projectId){
        List<RewardGetListResponseDto> rewards;
        try {
            rewards = rewardService.getRewardListByProject(projectId);
        } catch(IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        if(rewards.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(rewards);
    }



}
