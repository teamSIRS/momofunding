package com.ssafy.momofunding.domain.project.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.domain.QProject;

import javax.persistence.EntityManager;
import java.util.List;

public class ProjectRepositoryImpl implements ProjectRepositoryCustom{

    private final JPAQueryFactory query;

    public ProjectRepositoryImpl(EntityManager entityManager) {
        this.query = new JPAQueryFactory(entityManager);
    }

    @Override
    public List<Project> searchProjects(String order, Long category, String keyword) {
        QProject project = QProject.project;
        BooleanBuilder builder = new BooleanBuilder();

        builder.and(project.projectState.id.eq(2L));
        if(category != 0){
            builder.and(project.projectCategory.id.eq(category));
        }
        if(!keyword.equals("")){
            builder.and(project.projectName.contains(keyword));
        }

        List<Project> projects;
        if(order.equals("date")){
            projects = query.selectFrom(project)
                    .where(builder)
                    .orderBy(project.startDate.desc())
                    .fetch();
        }else{
            projects = query.selectFrom(project)
                    .where(builder)
                    .orderBy(project.popularity.desc())
                    .fetch();
        }
        return projects;
    }
}
