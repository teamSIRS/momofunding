package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.dto.ProjectGetDetailResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
import com.ssafy.momofunding.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/projects")
public class ProjectApiController {

    private final ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<Map<String, Object>> createProject(@RequestBody Map<String, Long> parameter) {
        Map<String, Object> responseMap = new HashMap<>();

        try {
            responseMap.put("projectId", projectService.createProject(parameter.get("userId")));
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @PutMapping("/{projectId}")
    public ResponseEntity<Map<String, Object>> updateProject(@PathVariable Long projectId, @RequestBody ProjectSaveRequestDto projectSaveRequestDto){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            responseMap.put("projectId", projectService.updateProject(projectId, projectSaveRequestDto));
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<Object> getProjectDetail(@PathVariable Long projectId){

        try{
            ProjectGetDetailResponseDto projectDetailResponseDto = projectService.getProjectDetail(projectId);
            return ResponseEntity.status(HttpStatus.OK).body(projectDetailResponseDto);
        }catch (IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<Map<String, Object>> deleteProject(@PathVariable Long projectId){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            projectService.deleteProject(projectId);
        } catch (EmptyResultDataAccessException e){
            responseMap.put("errorMsg", "잘못된 프로젝트 번호입니다:: projectId-"+projectId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

}
