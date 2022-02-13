package com.ssafy.momofunding.domain.reward.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.reward.dto.RewardUpdateRequestDto;
import com.ssafy.momofunding.global.config.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@DynamicInsert
@Entity
public class Reward extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne(targetEntity = Project.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    Project project;

    @Column(length = 50)
    String name;

    @Column
    Integer price;

    @Column(length = 100)
    String content;

    @Column(length = 50)
    String optionDescription;

    @Column
    Boolean isDeliver;

    @Column
    Integer limitedQuantity;

    @Column
    LocalDateTime deliverStartDate;

    @Builder
    public Reward(Long id, String name, Integer price, String content, String optionDescription,
                  Boolean isDeliver, Integer limitedQuantity, LocalDateTime deliverStartDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.content = content;
        this.optionDescription = optionDescription;
        this.isDeliver = isDeliver;
        this.limitedQuantity = limitedQuantity;
        this.deliverStartDate = deliverStartDate;
    }

    public void mapProject(Project p){
        this.project = p;
    }

    public void updateReward(RewardUpdateRequestDto rsr){
        this.name = rsr.getName();
        this.price = rsr.getPrice();
        this.content = rsr.getContent();
        this.optionDescription = rsr.getOptionDescription();
        this.isDeliver = rsr.getIsDeliver();
        this.limitedQuantity = rsr.getLimitedQuantity();
        this.deliverStartDate = rsr.getDeliverStartDate();
    }

    public void deleteLimitedQuantity(Integer quantity){
        this.limitedQuantity -= quantity;
    }

}
