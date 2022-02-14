import axios from "axios";
import { removeCircleOutline } from "ionicons/icons";
import {
  Body,
  Container,
  SurveyTitle,
  SurveyResult,
  EditIcon,
} from "../Survey/Survey.styled";
import {baseUrl} from '../../../../App';
import setAuthorizationToken from "../../../../atoms";
import styled from 'styled-components';
import React, { useState } from 'react';
import { Button, Fade, Modal } from "react-bootstrap";
import SurveyNum from "../../ProfileMyPage/SurveyForm/SurveyNum";
import SurveyShortAns from "../../ProfileMyPage/SurveyForm/SurveyShortAns";
import SurveySelect from "../../ProfileMyPage/SurveyForm/SurveySelect";
import { SubTitle } from "../../../ProjectDetail/ProjectBanner/BannerCaption/styles";

////이 사이가 추가한거/////

const SurveyModalBtn = styled.button`
  background-color: #6667ab;
  color: white;
  border: 0;
  outline: 0;
`;
const SeparateLineForm = styled.div`
  display: flex;
  align-items: center;
`;

const SeparateLine = styled.hr`
  display: inline;
  width: 150px;
  margin: 10px;
`;

const styles = {
  bgColor: {
    backgroundColor: "#6667ab",
  },
};
const SurveyAddMain = styled.div``;

const SurveyAddDiv = styled.div``;

const SurveyAddInputBox = styled.div``;
const SurveyAddInput = styled.input``;
const SurveyAddInputSelect = styled.select``;
const SurveyAddLabel = styled.label`
  font-size: 20px;
  margin-right: 20px;
`;

const ExpirationDate = styled.input`
  margin: 10px 0 20px 0;
`;

const SurveyAnsLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
`;

const SurveyAnsInput = styled.div`
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

/////////////========================////////////




function SurveyEdit({ survey, onRemove }) {

  // -----------------이 아래로 추가-------------------

  const [selectedNum, setSelectedNum] = useState("선택하세요");
  const selectList = ["선택하세요", "객관식", "주관식"];
  const onChange = (event) => {
    setSelectedNum(event.target.value);
  };

  const [show, setShow] = useState(false);
  const [endDate, setEndDate] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedSurvey, setSelectedSurvey] = useState();
  //-----------------이 위로 추가----------------------


  async function getSurvey(surveyId){
    await axios.get(baseUrl + '/surveys/' + surveyId + '/answers')
    .then((res) => {
      console.log(res.data);
      setSelectedSurvey(res.data);
      setEndDate(selectedSurvey.endDate);
      setTitle(selectedSurvey.title);
      setContent(selectedSurvey.content);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  async function editSurvey(){
    await axios({
      url: `${baseUrl}/surveys/${survey.id}`,
      method: "put",
      data:{
        title: title,
        content: "",
        endDate: endDate,
      },
      headers: setAuthorizationToken(),
    })
    .then((res) =>{
      console.log('ok');
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  return (
    <Body>
      <Container>
        <SurveyTitle>{survey.title}</SurveyTitle>
        {/* <SurveyResult onClick={()=>{ getSurvey(survey.id); }}>수정</SurveyResult> */}

        {/* 이 아래로 새로 추가한거 */}
        {/* <SurveyModalBtn onClick={handleShow}>추가</SurveyModalBtn> */}
        <SurveyResult onClick={()=>{ getSurvey(survey.id); handleShow();}}>수정</SurveyResult>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={styles.bgColor} closeButton>
            <Modal.Title>설문조사 작성</Modal.Title>
          </Modal.Header>

          <Modal.Body
            style={{
              backgroundColor: "whitesmoke",
            }}
          >

            {/*  */}
            <SurveyAddMain>
            <SurveyAddDiv>
            <form>
              <SurveyAnsLabel>[ 설문조사 종료 일시 및 제목 ]</SurveyAnsLabel>
              <SurveyAnsInput>
                <input
                  type="datetime-local"
                  required
                  value={endDate}
                  onChange={(e) =>{setEndDate(e.target.value);}}
                />
              </SurveyAnsInput>
              <SurveyAnsInput>
                <input
                  required
                  value={title}
                  onChange={(e) =>{
                    setTitle(e.target.value)
                  }}
                />
              </SurveyAnsInput>
              <SurveyAnsInput>
                <input
                  required
                  value={content}
                  onChange={(e) =>{
                    setContent(e.target.value)
                  }}
                />
            </SurveyAnsInput>
              <button onClick={()=>{editSurvey();}}>질문 등록</button>
            </form>
            <br/> 


                <SurveyAddInputBox>
                  <SurveyAddLabel>질문 양식 선택</SurveyAddLabel>
                  <select onChange={onChange} value={selectedNum}>
                    {selectList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <hr />

                  <SurveyAddLabel>
                    {selectedNum === "선택하세요" ? <SurveySelect /> : null}
                    {selectedNum === "객관식" ? <SurveyNum /> : null}
                    {selectedNum === "주관식" ? <SurveyShortAns/> : null}
                  </SurveyAddLabel>
                </SurveyAddInputBox>
                <hr />

                <Button onClick={()=>{console.log(selectedNum)}}>등록</Button>
              </SurveyAddDiv>
            </SurveyAddMain>
          </Modal.Body>
        </Modal>
        {/* 이 위로 새로 추가한 것 */}

      </Container>
      <EditIcon
        icon={removeCircleOutline}
        onClick={() => {onRemove(survey.id);}}
      ></EditIcon>
    </Body>
  );
}

export default SurveyEdit;
