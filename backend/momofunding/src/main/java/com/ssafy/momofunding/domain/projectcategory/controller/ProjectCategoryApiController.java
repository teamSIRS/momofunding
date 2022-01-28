package com.ssafy.momofunding.domain.projectcategory.controller;

import com.ssafy.momofunding.domain.projectcategory.dto.ProjectCategoryResponseDto;
import com.ssafy.momofunding.domain.projectcategory.service.ProjectCategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Project Category API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/categories")
public class ProjectCategoryApiController {

    private final ProjectCategoryService projectCategoryService;

    @Operation(
            summary = "프로젝트 카테고리 목록 조회",
            description = "프로젝트 카테고리 목록을 불러올 수 있음"
    )
    @GetMapping("")
    public ResponseEntity<Object> findCategories(){
        List<ProjectCategoryResponseDto> projectCategoryResponseDtoList = projectCategoryService.findCategories();
        if(projectCategoryResponseDtoList.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        else return ResponseEntity.status(HttpStatus.OK).body(projectCategoryResponseDtoList);

    }
}
