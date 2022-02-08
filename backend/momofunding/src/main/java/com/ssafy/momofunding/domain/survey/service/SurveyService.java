package com.ssafy.momofunding.domain.survey.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.dto.SurveyDetailResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyListResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final ProjectRepository projectRepository;

    @Transactional
    public Long saveSurvey(SurveySaveRequestDto surveySaveRequestDto) {
        Long projectId = surveySaveRequestDto.getProjectId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 프로젝트 번호 입니다. projectId : " + projectId));

        Survey survey = surveySaveRequestDto.toEntity();
        survey.mapProject(project);

        return surveyRepository.save(survey).getId();
    }

    @Transactional
    public SurveyListResponseDto findSurveyById(Long surveyId) {
        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new NoSuchElementException());

        return new SurveyListResponseDto(survey);
    }

    @Transactional
    public List<SurveyListResponseDto> findSurveys() {
        List<Survey> surveys = surveyRepository.findAll();
        if (surveys.isEmpty()) {
            throw new NoSuchElementException();
        }

        return surveys.stream()
                .map(SurveyListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void updateSurvey(SurveyUpdateRequestDto updateRequestDto, Long surveyId) {

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 설문조사 번호입니다. surveyId : " + surveyId));

        survey.updateSurvey(updateRequestDto);
    }

    @Transactional
    public void deleteSurvey(Long surveyId) {
        surveyRepository.deleteById(surveyId);
    }


    //설문조사 정보 디테일 조회
    @Transactional
    public SurveyDetailResponseDto findSurveyDetailById(Long surveyId) {
        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new NoSuchElementException());

        SurveyDetailResponseDto surveyDetailResponseDto = new SurveyDetailResponseDto(survey);

        surveyDetailResponseDto.setQuestions(
                survey.getSurveyQuestions()
                        .stream()
                        .map(SurveyQuestionResponseDto::new)
                        .collect(Collectors.toList()));

        return surveyDetailResponseDto;
    }


}
