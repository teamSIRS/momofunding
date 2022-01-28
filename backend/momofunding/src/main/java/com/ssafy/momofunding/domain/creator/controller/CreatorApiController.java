package com.ssafy.momofunding.domain.creator.controller;

import com.ssafy.momofunding.domain.creator.dto.CreatorDetailResponseDto;
import com.ssafy.momofunding.domain.creator.dto.CreatorUpdateRequestDto;
import com.ssafy.momofunding.domain.creator.service.CreatorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Tag(name = "Creator API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/creators")
public class CreatorApiController {

    private final CreatorService creatorService;

    @Operation(
            summary = "창작자 저장(수정)",
            description = "projectId로 창작자 정보 저장(수정)"
    )
    @Parameter(name = "projectId", description = "내용 저장할 창작자의 프로젝트 식별번호", required = true)
    @PutMapping("/{projectId}")
    public ResponseEntity<Object> updateCreator(@PathVariable Long projectId, @RequestBody CreatorUpdateRequestDto creatorUpdateRequestDto){
        try{
            creatorService.updateCreator(projectId, creatorUpdateRequestDto);
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
