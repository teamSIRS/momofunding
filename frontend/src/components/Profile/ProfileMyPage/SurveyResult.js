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
const ShortAnsResult = styled.span`
  display: block;
  /* text-decoration: underline; */
  margin-bottom: 3px;
`;

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
                <div>
                  <b>질문[객관식] : {question.title}</b>
                  <ReactApexCharts
                    options={{
                      chart: {
                        width: 200,
                        type: "pie",
                      },
                      labels: question.answers.map(
                        (answer) =>
                          answer.content + " [" + [answer.counts] + "]"
                      ),
                      legend: {
                        position: "right",
                      },

                      responsive: [
                        {
                          breakpoint: 480,
                          options: {
                            chart: {
                              width: 200,
                            },
                            legend: {
                              position: "right",
                            },
                          },
                        },
                      ],
                    }}
                    series={question.answers.map((answer) => answer.counts)}
                    type="pie"
                    width={400}
                    height={200}
                  />
                  <hr />
                </div>
              ) : (
                <div>
                  <b>질문[주관식] : {question.title}</b>

                  {question.answers.map((answer) => (
                    <ShortAnsResult>
                      <hr />
                      {answer}
                    </ShortAnsResult>
                  ))}
                </div>
              )
            )}

            <hr />
            <button onClick={handleClose}>닫기</button>
          </SurveyResultMain>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SurveyResult;
