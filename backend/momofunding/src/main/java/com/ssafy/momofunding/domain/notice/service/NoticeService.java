package com.ssafy.momofunding.domain.notice.service;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import com.ssafy.momofunding.domain.notice.dto.NoticeCreateRequestDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeDetailResponseDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeRequestDto;
import com.ssafy.momofunding.domain.notice.dto.NoticeResponseDto;
import com.ssafy.momofunding.domain.notice.repository.NoticeRepository;
import com.ssafy.momofunding.domain.user.domain.User;
import com.ssafy.momofunding.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class NoticeService {

    private final UserRepository userRepository;

    private final NoticeRepository noticeRepository;

    //공지사항 목록 조회(정렬 방식 선택)
    @Transactional
    public List<NoticeResponseDto> findNoticeByDate(String a) {
        List<Notice> notices = new ArrayList<>();
        if (a.equals("na"))
            notices = noticeRepository.findAll();
        else if (a.equals("nd"))
            notices = noticeRepository.findAllByOrderByIdDesc();
        return notices.stream()
                .map(NoticeResponseDto::new)
                .collect(Collectors.toList());
    }

    //공지사항 단일 조회
    @Transactional
    public NoticeDetailResponseDto findNoticeById(Long noticeId) {
        Notice notice = noticeRepository.findById(noticeId).orElseThrow(() -> new NoSuchElementException("잘못된 공지사항 ID 입니다. NoticeId-" + noticeId));
        notice.plusViewerCount();
        return new NoticeDetailResponseDto(notice);
    }


    //공지사항 작성
    @Transactional
    public Long createNotice(NoticeCreateRequestDto noticeCreateRequestDto) {
        User user = userRepository.findById(noticeCreateRequestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당하는 유저가 존재하지 않습니다. UserId = " + noticeCreateRequestDto.getUserId()));
        Notice notice = noticeCreateRequestDto.toEntity();
        notice.mapUser(user);
        return noticeRepository.save(notice).getId();
    }

    //공지사항 수정
    @Transactional
    public void updateNotice(Long noticeId, NoticeRequestDto noticeRequestDto) {
        Notice notice = noticeRepository.findById(noticeId).orElseThrow(() -> new IllegalArgumentException("해당 공지사항이 없습니다."));
        notice.updateNoticeInfo(noticeRequestDto);
    }

    //공지사항 삭제
    @Transactional
    public void deleteNotice(Long noticeId) {
        noticeRepository.deleteById(noticeId);
    }

}
