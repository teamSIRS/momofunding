package com.ssafy.momofunding.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ProjectCreateResponseDto {

    private Long projectId;

    @Builder
    public ProjectCreateResponseDto(Long projectId){
        this.projectId = projectId;
    }
}
