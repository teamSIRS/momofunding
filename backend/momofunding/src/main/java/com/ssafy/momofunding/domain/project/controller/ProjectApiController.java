package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.dto.ProjectCreateRequestDto;
import com.ssafy.momofunding.domain.project.dto.ProjectCreateResponseDto;
import com.ssafy.momofunding.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/projects")
public class ProjectApiController {

    private final ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<ProjectCreateResponseDto> saveProject(@RequestBody ProjectCreateRequestDto projectCreateRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(projectService.projectCreate(projectCreateRequestDto));
    }



}
