package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/projects")
public class ProjectApiController {

    private final ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<Map<String, Long>> createProject(@RequestBody Map<String, Long> parameter) {
        Map<String, Long> responseMap = new HashMap<>();
        responseMap.put("projectId", projectService.projectCreate(parameter.get("userId")));
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }



}
