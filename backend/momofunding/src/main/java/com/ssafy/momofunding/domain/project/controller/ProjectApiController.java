package com.ssafy.momofunding.domain.project.controller;

import com.ssafy.momofunding.domain.project.dto.ProjectDetailResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectResponseDto;
import com.ssafy.momofunding.domain.project.dto.ProjectUpdateRequestDto;
import com.ssafy.momofunding.domain.project.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Tag(name = "Project API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/projects")
public class ProjectApiController {

    private final ProjectService projectService;

    @Scheduled(cron = "0 0 0 * * *")
    public void changeProjectStateId(){
        LocalDateTime today = LocalDate.now().atStartOfDay();
        projectService.changeProjectsStateToComplete(today);
        System.out.println(today+"-change project state as 'complete(3)'");
    }

    @Operation(
            summary = "프로젝트 생성",
            description = "프로젝트 생성 버튼을 누르면 userId가 넘어가고 빈 프로젝트가 생성됨"
    )
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

    @Operation(
            summary = "프로젝트 내용 입력",
            description = "프로젝트 작성, 수정 두 작업에 해당함"
    )
    @Parameter(name = "projectId", description = "수정 할 프로젝트의 Id", required = true)
    @PutMapping("/{projectId}")
    public ResponseEntity<Map<String, Object>> updateProject(@PathVariable Long projectId,
                                                             @RequestPart("project") ProjectUpdateRequestDto projectSaveRequestDto,
                                                             @RequestPart(value = "mainImage", required = false) MultipartFile mainImg,
                                                             @RequestPart(value = "subImage", required = false) MultipartFile subImg) {
        Map<String, Object> responseMap = new HashMap<>();

        try {
            responseMap.put("projectId", projectService.updateProject(projectId, projectSaveRequestDto, mainImg, subImg));
        } catch (IllegalArgumentException | IOException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @Operation(
            summary = "프로젝트 단일 조회",
            description = "프로젝트 Id로 프로젝트 세부내용 조회"
    )
    @Parameter(name = "projectId", description = "조회 할 프로젝트의 Id", required = true)
    @GetMapping("/{projectId}")
    public ResponseEntity<Object> findProjectById(@PathVariable Long projectId) {

        try {
            ProjectDetailResponseDto projectDetailResponseDto = projectService.findProjectById(projectId);
            return ResponseEntity.status(HttpStatus.OK).body(projectDetailResponseDto);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    @Operation(
            summary = "프로젝트 삭제",
            description = "프로젝트 Id로 프로젝트 삭제"
    )
    @Parameter(name = "projectId", description = "삭제 할 프로젝트의 Id", required = true)
    @DeleteMapping("/{projectId}")
    public ResponseEntity<Map<String, Object>> deleteProject(@PathVariable Long projectId) {
        try {
            projectService.deleteProject(projectId);
        } catch (IllegalArgumentException e) {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", "잘못된 프로젝트 번호입니다:: projectId-" + projectId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Operation(
            summary = "프로젝트가 라이브 재생중인지 확인",
            description = "프로젝트 ID를 받아 라이브 재생 여부 (true or false) 반환"
    )
    @GetMapping("/{projectId}/is-play-live")
    public ResponseEntity<Object> isPlayLive(@PathVariable Long projectId) {

        Map<String, Object> responseMap = new HashMap<>();

       try{
           responseMap.put("isPlayLive", projectService.isPlayLive(projectId));
           return ResponseEntity.status(HttpStatus.OK).body(responseMap);
       }catch(IllegalArgumentException e){
           responseMap.put("errorMsg", e.getMessage());
           return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
       }
    }

    @Operation(
            summary = "회원이 창작한 프로젝트 다중 조회",
            description = "회원 ID로 회원이 창작한 프로젝트들을 확인할 수 있다."
    )
    @Parameter(name = "userId", description = "회원 식별 번호", required = true)
    @GetMapping("/users/{userId}/creators")
    public ResponseEntity<Object> getProjectsByUserCreator(@PathVariable Long userId) {
        try{
            List<ProjectResponseDto> projects = projectService.getProjectsByUserCreator(userId);
            if(projects.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            return ResponseEntity.status(HttpStatus.OK).body(projects);
        }catch (IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }

    @Operation(
            summary = "회원이 후원한 프로젝트 다중 조회",
            description = "회원 ID로 회원이 후원한 프로젝트들을 확인할 수 있다."
    )
    @Parameter(name = "userId", description = "회원 식별 번호", required = true)
    @GetMapping("/users/{userId}/orders")
    public ResponseEntity<Object> getProjectsByUserOrder(@PathVariable Long userId) {

        try{
            List<ProjectResponseDto> projects = projectService.getProjectsByUserOrder(userId);
            if(projects.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            return ResponseEntity.status(HttpStatus.OK).body(projects);
        }catch (IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }

    @Operation(
            summary = "프로젝트 진행 상태 변경",
            description = "프로젝트 진행 상태를 작성중 > 진행 중으로 변경할 수 있다."
    )
    @Parameter(name = "projectId", description = "프로젝트 식별 번호", required = true)
    @PutMapping("/{projectId}/complete")
    public ResponseEntity<Object> updateProjectState(@PathVariable Long projectId) {

        try{
            projectService.updateProjectState(projectId);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }catch (IllegalArgumentException e){
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
    }

    @Operation(
            summary = "프로젝트 검색 결과 조회",
            description = "검색조건에 따라 프로젝트 검색 결과 목록을 조회할 수 있다. \n 정렬 조건(최신순-date / 인기순-popularity)"
    )
    @Parameter(name = "keyword", description = "검색어", required = true)
    @GetMapping("/search")
    public ResponseEntity<Object> searchProjectsByConditions(@RequestParam("order") String order,
                                                             @RequestParam(value = "categoryId", required = false) Long categoryId,
                                                             @RequestParam(value = "keyword", required = false) String keyword){

        List<ProjectResponseDto> projects = projectService.searchProjectsByCondition(order, categoryId, keyword);
        if(projects.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(projects);
    }

}
