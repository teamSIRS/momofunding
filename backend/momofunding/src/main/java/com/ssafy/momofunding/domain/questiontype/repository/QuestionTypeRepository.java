package com.ssafy.momofunding.domain.questiontype.repository;

import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionTypeRepository extends JpaRepository<QuestionType, Long> {

}
