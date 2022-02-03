package com.ssafy.momofunding.domain.projectcategory.service;

import com.ssafy.momofunding.domain.projectcategory.domain.ProjectCategory;
import com.ssafy.momofunding.domain.projectcategory.dto.ProjectCategoryResponseDto;
import com.ssafy.momofunding.domain.projectcategory.repository.ProjectCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProjectCategoryService {

    private final ProjectCategoryRepository projectCategoryRepository;

    @Transactional
    public List<ProjectCategoryResponseDto> findCategories() {
        List<ProjectCategory> projectCategories = projectCategoryRepository.findAll();

        return projectCategories.stream()
                .map(ProjectCategoryResponseDto::new)
                .collect(Collectors.toList());
    }

}
