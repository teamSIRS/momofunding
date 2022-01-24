package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
import com.ssafy.momofunding.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
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
            responseMap.put("projectId", projectService.projectCreate(parameter.get("userId")));
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @PutMapping("/{projectId}")
    public ResponseEntity<Map<String, Object>> saveProject(@PathVariable Long projectId, @RequestBody ProjectSaveRequestDto projectSaveRequestDto){
        Map<String, Object> responseMap = new HashMap<>();

        try {
            projectService.projectSave(projectId, projectSaveRequestDto);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
