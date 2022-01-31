package com.ssafy.momofunding.domain.surveyliverecord.domain;

import com.ssafy.momofunding.domain.live.domain.Live;
import com.ssafy.momofunding.domain.questionselect.domain.QuestionSelect;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class SurveyLiveRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = Live.class)
    @JoinColumn(name = "live_id", nullable = false)
    private Live live;

    @ManyToOne(targetEntity = Survey.class)
    @JoinColumn(name = "survey_id", nullable = false)
    private Survey survey;


    public void mapSurvey(Survey survey){
        this.survey = survey;
    }

    public void mapLive(Live live){
        this.live = live;
    }

}