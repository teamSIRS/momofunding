package com.ssafy.momofunding.domain.questionselect.dto;

import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class QuestionSelectResponseDto {

    private Long id;
    private String content;

    public QuestionSelectResponseDto(QuestionSelect questionSelect){
        this.content = questionSelect.getContent();
        this.id = questionSelect.getId();
    }

}
