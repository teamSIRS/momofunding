package com.ssafy.momofunding.domain.survey.service;

import com.ssafy.momofunding.domain.project.domain.Project;
import com.ssafy.momofunding.domain.project.repository.ProjectRepository;
import com.ssafy.momofunding.domain.survey.domain.Survey;
import com.ssafy.momofunding.domain.survey.dto.SurveyDetailResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyListResponseDto;
import com.ssafy.momofunding.domain.survey.dto.SurveySaveRequestDto;
import com.ssafy.momofunding.domain.survey.dto.SurveyUpdateRequestDto;
import com.ssafy.momofunding.domain.survey.repository.SurveyRepository;
import com.ssafy.momofunding.domain.surveyanswer.domain.SurveyAnswer;
import com.ssafy.momofunding.domain.surveyanswer.dto.SurveyAnswerResponseDto;
import com.ssafy.momofunding.domain.surveyanswer.repository.SurveyAnswerRepository;
import com.ssafy.momofunding.domain.surveyquestion.domain.SurveyQuestion;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionChoiceAnswerResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionEssayAnswerResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionResponseDto;
import com.ssafy.momofunding.domain.surveyquestion.dto.SurveyQuestionSelectIdsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final ProjectRepository projectRepository;
    private final SurveyAnswerRepository surveyAnswerRepository;

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
    public List<SurveyListResponseDto> findSurveysByProjectId(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 프로젝트 번호 입니다. projectId : " + projectId));

        List<Survey> surveys = surveyRepository.findAllByProjectId(projectId);
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

        surveyDetailResponseDto.setQuestions(survey.getSurveyQuestions()
                .stream()
                .map(SurveyQuestionSelectIdsResponseDto::new)
                .collect(Collectors.toList()));

        return surveyDetailResponseDto;
    }

    //설문조사 정보 디테일 조회
    @Transactional
    public SurveyDetailResponseDto findSurveyDetailByIdWithAnswers(Long surveyId) {
        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new NoSuchElementException());

        SurveyDetailResponseDto surveyDetailResponseDto = new SurveyDetailResponseDto(survey);

        List<SurveyQuestion> surveyQuestions = survey.getSurveyQuestions();
        List<SurveyQuestionResponseDto> responseDtos = new ArrayList<>();

        for (SurveyQuestion surveyQuestion : surveyQuestions) {
            SurveyQuestionResponseDto dto = new SurveyQuestionResponseDto();

            if (surveyQuestion.getQuestionType().getId() == 1) { // 객관식
                List<SurveyAnswerResponseDto> choiceAnswers = surveyAnswerRepository.findChoiceAnswerBySurveyQuestionId(surveyQuestion.getId());

                dto = new SurveyQuestionChoiceAnswerResponseDto(surveyQuestion, choiceAnswers);
            }
            else if (surveyQuestion.getQuestionType().getId() == 2) { // 주관식
                List<SurveyAnswer> essayAnswers = surveyAnswerRepository.findAllBySurveyQuestionId(surveyQuestion.getId());
                List<String> answers = essayAnswers
                        .stream()
                        .map(s -> s.getContent())
                        .collect(Collectors.toList());
                dto = new SurveyQuestionEssayAnswerResponseDto(surveyQuestion, answers);
            }
            responseDtos.add(dto);
        }

        surveyDetailResponseDto.setQuestions(responseDtos);



        return surveyDetailResponseDto;
    }


}
