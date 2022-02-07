package com.ssafy.momofunding.domain.rewardorder.domain;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.reward.domain.Reward;
import com.ssafy.momofunding.domain.rewardorder.dto.RewardOrderDeliveryRequestDto;
import com.ssafy.momofunding.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
public class RewardOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne(targetEntity = Reward.class)
    @JoinColumn(name = "reward_id", nullable = false)
    Reward reward;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id", nullable = false)
    User user;

    @ManyToOne(targetEntity = Project.class)
    @JoinColumn(name = "project_id", nullable = false)
    Project project;

    @Column
    Integer quantity;

    @Column(length = 100)
    String optionContent;

    @Column(length = 20)
    String recipientName;

    @Column(length = 20)
    String recipientTel;

    @Column(length = 50)
    String recipientAddress;

    @Column(length = 100)
    String requestContent;

    @Column
    Integer amount;

    @Column
    Timestamp registerDate;

    @Builder
    public RewardOrder(Long id, Integer quantity, String optionContent, String recipientName,
                       String recipientTel, String recipientAddress, String requestContent,
                       Integer amount, Timestamp registerDate){
        this.id = id;
        this.quantity = quantity;
        this.optionContent = optionContent;
        this.recipientName = recipientName;
        this.recipientTel = recipientTel;
        this.recipientAddress = recipientAddress;
        this.requestContent = requestContent;
        this.amount = amount;
        this.registerDate = registerDate;
    }

    public void mapReward(Reward r){
        this.reward = r;
    }

    public void mapUser(User u){
        this.user = u;
    }

    public void mapProject(Project p){
        this.project = p;
    }

    public void updateDeliveryInfo(RewardOrderDeliveryRequestDto rodr){
        this.recipientName = rodr.getRecipientName();
        this.recipientTel = rodr.getRecipientTel();
        this.recipientAddress = rodr.getRecipientAddress();
        this.requestContent = rodr.getRequestContent();
    }
}
