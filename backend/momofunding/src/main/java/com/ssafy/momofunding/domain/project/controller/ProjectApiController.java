package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.dto.ProjectSaveRequestDto;
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
    public ResponseEntity saveProject(@RequestBody ProjectSaveRequestDto projectSaveRequestDto) {
        System.out.println(projectSaveRequestDto.toString());
        System.out.println("사용자 아이디: "+projectSaveRequestDto.getUserId()+" "+ projectSaveRequestDto.getProjectCategoryId());
        projectService.projectSave(projectSaveRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

}
