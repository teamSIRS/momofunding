package com.ssafy.momofunding.domain.rewardorder.controller;

import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderDeliveryRequestDto;
import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderDeliveryResponseDto;
import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderResponseDto;
import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderSaveRequestDto;
import com.ssafy.momofunding.domain.rewardorder.service.RewardOrderService;
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

    @Operation(
            summary = "후원 목록 다중 조회",
            description = "후원한 정보 목록을 조회할 수 있다."
    )
    @Parameter(name = "userId", description = "회원 식별 번호", required = true)
    @GetMapping("/users/{userId}")
    public ResponseEntity<Object> findOrdersByUserId(@PathVariable Long userId){
        try {
            List<RewardOrderResponseDto> rewardOrders = rewardOrderService.findOrdersByUserId(userId);
            if(rewardOrders.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            return ResponseEntity.status(HttpStatus.OK).body(rewardOrders);
        } catch(IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }

    @Operation(
            summary = "후원 배송 정보 조회",
            description = "후원 배송 정보를 조회할 수 있다."
    )
    @Parameter(name = "rewardOrderId", description = "주문 식별 번호", required = true)
    @GetMapping("/{rewardOrderId}")
    public ResponseEntity<Object> findOrderById(@PathVariable Long rewardOrderId){
        try {
            RewardOrderDeliveryResponseDto rewardOrder = rewardOrderService.findOrderById(rewardOrderId);
            return ResponseEntity.status(HttpStatus.OK).body(rewardOrder);
        } catch(IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }


    @Operation(
            summary = "후원 배송 정보 수정",
            description = "후원 배송 정보를 수정할 수 있다."
    )
    @Parameter(name = "rewardOrderId", description = "주문 식별 번호", required = true)
    @PutMapping("/{rewardOrderId}")
    public ResponseEntity<Object> updateOrderDeliveryInfo(@PathVariable Long rewardOrderId, @RequestBody RewardOrderDeliveryRequestDto rewardOrderDeliveryRequestDto){
        try {
            rewardOrderService.updateOrderDeliveryInfo(rewardOrderId, rewardOrderDeliveryRequestDto);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } catch(IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }
}
