package com.ssafy.momofunding.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ProjectCreateRequestDto {

    private Long userId;

    @Builder
    public ProjectCreateRequestDto(Long userId){
        this.userId = userId;
    }
}
