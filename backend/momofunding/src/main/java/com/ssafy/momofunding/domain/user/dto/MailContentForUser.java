package com.ssafy.momofunding.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MailContentForUser {

    private String address;
    private String title;
    private String message;

    @Builder
    public MailContentForUser(String address, String title, String message) {
        this.address = address;
        this.title = title;
        this.message = message;
    }
}
