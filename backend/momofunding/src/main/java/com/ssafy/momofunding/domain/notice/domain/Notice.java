package com.ssafy.momofunding.domain.notice.domain;

import com.ssafy.momofunding.domain.notice.dto.NoticeRequestDto;
import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Getter
@NoArgsConstructor
public class Notice extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = User.class)
    @JoinColumn(name = "user_id", nullable = false)
    User user;

    @Column(nullable = false, length = 40)
    private String title;

    @Column(nullable = false, length = 500)
    private String content;

    @Column
    private Long viewerCount;

    @PrePersist
    public void initializer() {
        viewerCount = 0L;
    }

    public void mapUser(User user) {
        this.user = user;
    }

    @Builder
    public Notice(User user, String title, String content, Long viewerCount) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.viewerCount = viewerCount;
    }

    public void updateNoticeInfo(NoticeRequestDto noticeRequestDto) {
        this.title = noticeRequestDto.getTitle();
        this.content = noticeRequestDto.getContent();
    }

    public void plusViewerCount() {
        this.viewerCount++;
    }
}
