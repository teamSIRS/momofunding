package com.ssafy.momofunding.domain.survey.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.questiontype.domain.QuestionType;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final ProjectRepository projectRepository;

    @Transactional
    public Long save(SurveySaveRequestDto surveySaveRequestDto){
        Long projectId = surveySaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호 입니다. projectId : " + projectId));

        Survey survey = surveySaveRequestDto.toEntity();
        survey.mapProject(project);

        return surveyRepository.save(survey).getId();
    }

    @Transactional
    public void updateSurvey(SurveyUpdateRequestDto updateRequestDto, Long surveyId){

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 설문조사 번호입니다. surveyId : " + surveyId));

        survey.updateSurvey(updateRequestDto);
    }

}
