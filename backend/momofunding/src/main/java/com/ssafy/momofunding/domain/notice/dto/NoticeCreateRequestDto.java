package com.ssafy.momofunding.domain.notice.dto;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class NoticeCreateRequestDto {

    private Long userId;
    private String title;
    private String content;

    @Builder
    public NoticeCreateRequestDto(Long userId, String title, String content) {
        this.userId = userId;
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
