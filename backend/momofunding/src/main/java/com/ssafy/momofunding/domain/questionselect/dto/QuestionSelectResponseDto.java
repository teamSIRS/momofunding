package com.ssafy.momofunding.domain.questionselect.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import lombok.Builder;
import lombok.Getter;

@Getter
public class QuestionSelectResponseDto {

    private Long id;
    private String content;

    public QuestionSelectResponseDto(QuestionSelect questionSelect){
        this.content = questionSelect.getContent();
        this.id = questionSelect.getId();
    }

}
