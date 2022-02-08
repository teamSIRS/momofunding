package com.ssafy.momofunding.domain.notice.dto;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@NoArgsConstructor
public class NoticeRequestDto {

    private String title;
    private String content;

    @Builder
    public NoticeRequestDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
    public Notice toEntity(){
        return Notice.builder()
                .title(title)
                .content(content)
                .build();
    }

}
