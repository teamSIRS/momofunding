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
import { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

const styles = {
  bgColor: {
    backgroundColor: "#6667ab",
  },
};
const SurveyAddMain = styled.div``;

const SurveyAddDiv = styled.div``;

const SurveyAddInputBox = styled.div``;

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

const SurveyNumInput = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0;
  input {
    width: 440px;
    float: right;
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

const Box = styled.div`
  display: flex;
`;

const QBox = styled.p`
  display:flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`;

const ShortAns = styled.div`
  padding-left: 30px;
`;

const QList = styled.ol`
  padding-left: 50px;
`;

function SurveyEdit({ survey, onRemove, Survey }) {

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
  const [questions, setQuestions] = useState("");

  async function getSurvey(surveyId){
    await axios.get(baseUrl + '/surveys/' + surveyId)
    .then((res) => {
      // console.log(res.data);
      setSelectedSurvey(res.data);
      setEndDate(res.data.endDate);
      setTitle(res.data.title);
      setContent(res.data.content);
      setQuestions(res.data.questions)
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
        content: content,
        endDate: endDate,
      },
      headers: setAuthorizationToken(),
    })
    .then((res) =>{
      // console.log('ok');
    })
    .catch((err) =>{
      console.log(err);
      swal('오류가 발생했습니다', {icon: "warning"});
    })
  }


  return (
    <Body>
      <Container onClick={()=>{console.log('서베이id', survey.id)}}>
        <SurveyTitle>{survey.title}</SurveyTitle>

        <SurveyResult onClick={()=>{ getSurvey(survey.id); handleShow();}}>수정</SurveyResult>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={styles.bgColor} closeButton>
            <Modal.Title>설문조사 수정</Modal.Title>
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
              <button onClick={()=>{editSurvey();}}>설문조사 수정</button>
            </form>

                <hr/>
                <SurveyAnsLabel>[ 설문조사 질문 ]</SurveyAnsLabel>
                <SurveyAddInputBox>
                  {
                    questions.length === 0
                    ? null
                    : (
                      questions.map((project)=>{
                        return(
                            <SurveyNumInput>
                              <Box>
                                <QBox>Q.</QBox>
                                <input value={project.title}></input>
                              </Box>

                              {
                                project.selectIds.length !== 0
                                ? (
                                  <QList>
                                    {project.selectIds.map((item)=>{
                                      return <li key={item.id}>{item.content}</li>
                                    })}
                                  </QList>
                                )
                                : <ShortAns>주관식 질문입니다</ShortAns>
                              }

                              <br/>
                            </SurveyNumInput>
                        )
                      })
                    )
                  }
                </SurveyAddInputBox>
                <hr />

                <Button onClick={()=>{setShow(!show); Survey();}}>완료</Button>
              </SurveyAddDiv>
            </SurveyAddMain>
          </Modal.Body>
        </Modal>
      </Container>
      <EditIcon
        icon={removeCircleOutline}
        onClick={() => {onRemove(survey.id);}}
      ></EditIcon>
    </Body>
  );
}

export default SurveyEdit;
