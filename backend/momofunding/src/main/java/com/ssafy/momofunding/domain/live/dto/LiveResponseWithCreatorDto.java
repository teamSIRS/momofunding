package com.ssafy.momofunding.domain.live.dto;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import com.ssafy.momofunding.domain.live.domain.Live;
import lombok.Getter;

@Getter
public class LiveResponseWithCreatorDto extends LiveResponseDto{
    private String creatorName;
    private String creatorImageUrl;

    public LiveResponseWithCreatorDto (Live live, Creator creator) {
        super(live);
        this.creatorName = creator.getCreatorName();
        this.creatorImageUrl = creator.getCreatorImageUrl();
    }

}
