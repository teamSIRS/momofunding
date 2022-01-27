package com.ssafy.momofunding.domain.projectcategory.controller;

import com.ssafy.momofunding.domain.projectcategory.dto.ProjectCategoryResponseDto;
import com.ssafy.momofunding.domain.projectcategory.service.ProjectCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/categories")
public class ProjectCategoryApiController {

    private final ProjectCategoryService projectCategoryService;

    @GetMapping("")
    public ResponseEntity<Object> findCategories(){
        List<ProjectCategoryResponseDto> projectCategoryResponseDtoList = projectCategoryService.findCategories();
        if(projectCategoryResponseDtoList.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        else return ResponseEntity.status(HttpStatus.OK).body(projectCategoryResponseDtoList);

    }
}
