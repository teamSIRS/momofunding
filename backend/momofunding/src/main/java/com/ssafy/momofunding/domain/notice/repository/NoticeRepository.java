package com.ssafy.momofunding.domain.notice.repository;

import com.ssafy.momofunding.domain.notice.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findAllByOrderByIdDesc();
}
