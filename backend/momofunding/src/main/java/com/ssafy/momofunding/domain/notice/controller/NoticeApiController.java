package com.ssafy.momofunding.domain.notice.controller;


import com.ssafy.momofunding.domain.notice.dto.NoticeCreateRequestDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeDetailResponseDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeRequestDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeResponseDto;
import com.ssafy.momofunding.domain.notice.service.NoticeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
@Tag(name = "Notice API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/notices")
public class NoticeApiController {
    private final NoticeService noticeService;

    //공지사항 목록 조회
    @Operation(
            summary = "공지사항 목록 조회",
            description = "공지사항 페이지에서 공지사항들을 조회 할 수 있습니다."
    )
    @Parameter(name = "sort", description = "정렬 방식 na = 오름차순 , nd = 내림차순(default)", required = true)
    @GetMapping("")
    public ResponseEntity<Object> findNoticesBySort(@RequestParam String sort) {
        List<NoticeResponseDto> notices = noticeService.findNoticeByOrder(sort);
        if (notices.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(notices);
    }

    //공지사항 단일 조회
    @Operation(
            summary = "공지사항 단일 조회",
            description = "공지사항 페이지에서 공지사항을 클릭해 상세 정보 조회"
    )
    @Parameter(name = "noticeId", description = "공지사항 Id", required = true)
    @GetMapping("/{noticeId}")
    public ResponseEntity findNoticeById(@PathVariable("noticeId") Long noticeId) {
        try {
            NoticeDetailResponseDto noticeDetailResponseDto = noticeService.findNoticeById(noticeId);
            return ResponseEntity.status(HttpStatus.OK).body(noticeDetailResponseDto);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    //공지사항 작성
    @Operation(
            summary = "공지사항 작성",
            description = "공지사항 작성 버튼 누르면 공지사항 저장 됨 관리자만 공지사항 작성 가능함"
    )
    @PostMapping("")
    public ResponseEntity<Object> createNotice(@RequestBody NoticeCreateRequestDto noticeCreateRequestDto) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            responseMap.put("noticeId", noticeService.createNotice(noticeCreateRequestDto));
        } catch (IllegalArgumentException e) {
            System.out.println("test 입니다");
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //공지사항 수정
    @Operation(
            summary = "공지사항 수정",
            description = "NoticeId에 해당하는 공지사항 수정"
    )
    @Parameter(name = "noticeid", description = "공지사항 id", required = true)
    @PutMapping("/{noticeId}")
    public ResponseEntity updateNotice(@PathVariable("noticeId") Long noticeId, @RequestBody NoticeRequestDto noticeRequestDto) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            noticeService.updateNotice(noticeId, noticeRequestDto);
        } catch (IllegalArgumentException e) {
            responseMap.put("errorMsg", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    //공지사항 삭제
    @Operation(
            summary = "공지사항 삭제",
            description = "NoticeId에 해당하는 공지사항 삭제"
    )
    @Parameter(name = "noticeid", description = "공지사항 id", required = true)
    @DeleteMapping("/{noticeId}")
    public ResponseEntity updateNotice(@PathVariable("noticeId") Long noticeId) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            noticeService.deleteNotice(noticeId);
        } catch (EmptyResultDataAccessException e) {
            responseMap.put("errorMsg", "해당 공지사항이 존재하지 않습니다.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }


}
