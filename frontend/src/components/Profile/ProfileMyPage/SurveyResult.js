import styled from "styled-components";

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactApexCharts from "react-apexcharts";
import axios from "axios";
import { baseUrl } from "../../../App";

const SurveyModalBtn = styled.button`
  background-color: #6667ab;
  color: white;
  border: 0;
  outline: 0;
  margin-right: 10px;
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

const SurveyResultMain = styled.div``;

function SurveyResult() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState("");
  const [questions, setQuestions] = useState([]);
  //////////////////////////////////////////////////////////////////////

  function getResults() {
    const getResults = async () => {
      await axios({
        url: `/surveys/1/answers`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          setData(response.data);
          setQuestions(response.data.questions);
          console.log(response.data.questions);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    getResults();
  }

  useEffect(() => {
    getResults();
  }, []);
  return (
    <>
      <SurveyModalBtn onClick={handleShow}>결과보기</SurveyModalBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={styles.bgColor} closeButton>
          <Modal.Title>설문조사 결과</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <SurveyResultMain>
            {questions.map((question) =>
              question.questionType.id === 1 ? (
                <ReactApexCharts
                  options={{
                    chart: {
                      width: 350,
                      type: "pie",
                    },
                    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                    responsive: [
                      {
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: 200,
                          },
                          legend: {
                            position: "bottom",
                          },
                        },
                      },
                    ],
                  }}
                  series={[44, 55, 13, 43, 22]}
                  type="pie"
                  width={300}
                />
              ) : (
                <ul>
                  질문 : {question.title} .
                  {question.answers.map((answer) => (
                    <li>{answer}</li>
                  ))}
                </ul>
              )
            )}

            <hr />
            <button>닫기</button>
          </SurveyResultMain>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SurveyResult;
