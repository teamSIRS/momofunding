package com.ssafy.momofunding.domain.projectcategory.dto;

import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ProjectCategoryResponseDto {

    private Long id;
    private String name;

    public ProjectCategoryResponseDto(ProjectCategory projectCategoryEntity){
        this.id = projectCategoryEntity.getId();
        this.name = projectCategoryEntity.getName();
    }
}

