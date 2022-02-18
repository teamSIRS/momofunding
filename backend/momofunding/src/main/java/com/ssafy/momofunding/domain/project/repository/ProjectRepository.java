package com.ssafy.momofunding.domain.project.repository;

import com.ssafy.momofunding.domain.project.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long>, ProjectRepositoryCustom {
    List<Project> findAllByUserId(Long userId);

    @Query(value = "select li.sessionId " +
            "from Live li join Project pr " +
            "on li.project.id = pr.id " +
            "where li.liveState.id = 1 and pr.id = :projectId")
    String findSessionIdByProjectId(@Param("projectId") Long projectId);
}
