package com.ssafy.momofunding.domain.live.controller;

import com.ssafy.momofunding.domain.live.dto.LiveResponseDto;
import com.ssafy.momofunding.domain.live.service.LiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@RestController
public class LiveApiController {
    private final LiveService liveService;

    @GetMapping("/lives")
    public ResponseEntity findBySort(@RequestParam String sortValue){
        List<LiveResponseDto> lives = new ArrayList<>();

        if (sortValue.equals("date")){
            Sort sort = Sort.by(Sort.Direction.DESC, "id");
            lives = liveService.findBySort(sort);
        }

        if (lives.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

        return ResponseEntity.status(HttpStatus.OK).body(lives);
    }


}
