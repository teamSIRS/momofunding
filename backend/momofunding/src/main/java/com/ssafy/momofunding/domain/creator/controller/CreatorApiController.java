package com.ssafy.momofunding.domain.creator.controller;

import com.ssafy.momofunding.domain.creator.dto.CreatorDetailResponseDto;
import com.ssafy.momofunding.domain.creator.dto.CreatorUpdateRequestDto;
import com.ssafy.momofunding.domain.creator.service.CreatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/creators")
public class CreatorApiController {

    private final CreatorService creatorService;

    @PutMapping("/{creatorId}")
    public ResponseEntity<Object> updateCreator(@PathVariable Long creatorId, @RequestBody CreatorUpdateRequestDto creatorUpdateRequestDto){
        try{
            creatorService.updateCreator(creatorId, creatorUpdateRequestDto);
        }catch (IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Object> findCreatorByProjectId(@PathVariable Long projectId){
        try {
            CreatorDetailResponseDto creatorDetailResponseDto = creatorService.findCreatorByProjectId(projectId);
            return ResponseEntity.status(HttpStatus.OK).body(creatorDetailResponseDto);
        } catch(IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }
    
}
