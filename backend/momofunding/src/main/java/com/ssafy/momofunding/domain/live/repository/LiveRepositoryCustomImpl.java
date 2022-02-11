package com.ssafy.momofunding.domain.live.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.live.domain.QLive;

import javax.persistence.EntityManager;
import java.util.List;

public class LiveRepositoryCustomImpl implements LiveRepositoryCustom{

    private final JPAQueryFactory query;

    public LiveRepositoryCustomImpl(EntityManager entityManager) {
        this.query = new JPAQueryFactory(entityManager);
    }

    @Override
    public List<Live> searchLives(String order, Long category, String keyword) {
        QLive live = QLive.live;
        BooleanBuilder builder = new BooleanBuilder();

        builder.and(live.liveState.id.eq(1L));
        if(category != null){
            builder.and(live.projectCategory.id.eq(category));
        }
        if(keyword != null){
            builder.and(live.title.contains(keyword));
        }

        List<Live> lives;
        if(order.equals("date")){
            lives = query.selectFrom(live)
                    .where(builder)
                    .orderBy(live.registerTime.desc())
                    .fetch();
        }else{
            lives = query.selectFrom(live)
                    .where(builder)
                    .orderBy(live.viewerCount.desc())
                    .fetch();
        }
        return lives;
    }
}
