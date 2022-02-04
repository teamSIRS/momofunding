package com.ssafy.momofunding.domain.rewardorder.controller;

import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderSaveRequestDto;
import com.ssafy.momofunding.domain.rewardorder.service.RewardOrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Tag(name = "Reward Order API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/orders")
public class RewardOrderApiController {

    private final RewardOrderService rewardOrderService;

    @Operation(
            summary = "리워드 구매(주문) 내역 저장",
            description = "리워드 구매 시 구매 내역이 저장됨"
    )
    @PostMapping("")
    public ResponseEntity<Object> saveRewardOrder(@RequestBody RewardOrderSaveRequestDto rewardOrderSaveRequestDto){
        Map<String, Object> responseMap = new HashMap<>();
        try {
            Long rewardOrderId = rewardOrderService.saveRewardOrder(rewardOrderSaveRequestDto);
            responseMap.put("rewardOrderId", rewardOrderId);
            return ResponseEntity.status(HttpStatus.OK).body(responseMap);

        }catch (IllegalArgumentException e){
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }
}
