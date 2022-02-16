import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from 'react-bootstrap';
import {
  numQuestionSelector,
  numQuestionState,
  numQuestionTitleState,
} from "../atoms";
import setAuthorizationToken from '../../../../atoms';
import axios from 'axios';
import { baseUrl } from '../../../../App';
import swal from "sweetalert";
import styled from "styled-components";
import { MomoColor } from '../../../../shared/global';

const SurveyNumLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px 0px;
`;

const SurveyNumInput = styled.div`
  input {
    width: 470px;
    margin-bottom: 15px;
    border-radius: 5px;
    border-color: transparent;
    padding: 5px;
    background-color: #e3e3ef;
    &:focus {
      outline: 1px solid #6667ab;
    }
  }
`;

const MyBtn = styled.a`
  color: white;
  background: ${MomoColor};
  border-radius: 5px;
  padding: 6px 12px;
`;

const ContentListBox = styled.ol`
  margin-top: 20px;
`;

function SurveyNum({ surveyId, AddSurveyQuest}) {
  const { register, handleSubmit, setValue } = useForm();
  const setQuestionTitle = useSetRecoilState(numQuestionTitleState);
  const setNumQuestion = useSetRecoilState(numQuestionState);
  const [numQuestionTitle, numQuestions] = useRecoilValue(numQuestionSelector);   
  const onQuestionValid = ({ questionTitle, question }) => {
    setQuestionTitle(questionTitle);
    
    setNumQuestion((oldQuestion) => [
      { text: question, id: Date.now() },
      ...oldQuestion,
    ]);
    
    setValue("question", "");
  };
  
  const [title, setTitle] = useState("");
  const [questionType, setQuestionType] = useState(1);
  //객관식 문항 content
  const [content, setContent] = useState("");
  const [int, setInt] = useState(0);
  const [questionId, setQuestionId] = useState();
  const [contentList, setContentList] = useState([]);
  // const [questions, setQuestion] = useState("");

  const AddSurveyNum = async() =>{
    await axios({
      url: baseUrl+'/question-select',
      method: "post",
      data:{
        surveyQuestionId: questionId,
        content: content,
      },
      headers: setAuthorizationToken(),
    })
    .then((res) =>{
      console.log('문항등록성공!');
    })
    .catch((err) => {
      console.log(err);
      swal('다시 확인해주세요');
    })
  }

  //////////??여기 뭔가 잘못되..었을까요?모르겠
  //설문조사 질문 받아옴
  const getQuestions = async() =>{
    await axios({
      url: baseUrl + '/surveys/' + surveyId,
      method: "get",
      headers: setAuthorizationToken(),
    })
    .then((res) =>{
      console.log(res.data.questions[res.data.questions.length-1]);
      // console.log('ok', res.data.questions[0].id);
      // console.log(res.data);
      setQuestionId(res.data.questions[0].id);
      // setInt(int+1);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  // const getOk = async() =>{
  //   await axios({
  //     url: baseUrl + '/surveys/' + surveyId,
  //     method: "get",
  //     headers: setAuthorizationToken(),
  //   })
  //   .then((res) =>{
  //     console.log(res.data);
  //     // setQuestionId(res.data.questions[0].id);
  //     // setInt(int+1);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  const [openContent, setOpenContent] = useState(false);

  const AddQuestion = (event) => {
    event.preventDefault();
    AddSurveyQuest(surveyId, questionType, title); //서베이에 질문 추가
    getQuestions();
    getQuestions();
    swal("질문이 등록되었습니다", "이제 문항을 등록해주세요");
    setOpenContent(true);
    setContentList([]); //얘를 한번 지워서 try
  }

  const AddNumContent = () =>{
    // getSurvey(surveyId);
    // getQuestions(); //얘가 있어서 안되나?
    AddSurveyNum();
    setContentList([...contentList, content]);
    // console.log(contentList);
    setContent("");
  }

  console.log()
  return (
    <div>
      <p onClick={getQuestions}>test</p>
      <SurveyNumLabel>[ 객관식 질문 등록 ]</SurveyNumLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyNumInput>
          <input
            required
            placeholder="객관식 질문을 입력하고 질문 등록을 눌러주세요"
            onChange={(e) => {setTitle(e.target.value);}}
          />
        </SurveyNumInput>
        <MyBtn onClick={AddQuestion}>질문 등록</MyBtn>
      </form>
      <br/>
      {
        openContent
        ? (
          <>
            <form>
              <SurveyNumLabel>[ 객관식 문항 등록 ]</SurveyNumLabel>
              <SurveyNumInput>
                <input 
                  required
                  placeholder='객관식 문항을 등록하고 등록 버튼을 눌러주세요'
                  value={content}
                  onChange={(e) => {setContent(e.target.value)}}
                />
              </SurveyNumInput>
              <MyBtn type="submit" onClick={AddNumContent}>문항 추가</MyBtn>
            </form>

            <ContentListBox>
              {contentList.map((a, i) =>{
                return (
                  <li>{a}</li>
                )
              })}
            </ContentListBox>
          </>
        )
        : null
      }
    </div>
  );
}
export default SurveyNum;
