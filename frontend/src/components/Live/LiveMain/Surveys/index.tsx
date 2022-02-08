import axios from "axios";
import { useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { baseUrl } from "../../../../App";
import { ChatProps } from "../Chat";
import { ChatTop } from "../Chat/styles";
import { authorizationState, submitState } from "../LiveMain";
import {
  SurveyBody,
  SurveyCreatorMsgBox,
  SurveyDescription,
  SurveyFooter,
  SurveyHeader,
  SurveyMessageBox,
  SurveyTitle,
  SurveyWrapper,
  SurveySubmitBtn,
} from "./styles";
import SurveyChoice from "./SurveyChoice";
import SurveyNarrative from "./SurveyNarrative";

const thankYouMessage = "설문에 참여해주셔서 감사합니다";
const checkMessage = "시청자 대상 설문이 진행중입니다";

const surveyId = 1;

type questionForm = {
  id: number;
  title: string;
  questionType: {
    id: number;
    name: string;
  };
  questionIds: {
    id: number;
    content: string;
  }[];
};

type apiForm = {
  id: number;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  questions: questionForm[];
};

const defaultApi: apiForm = {
  id: -1,
  title: "",
  content: "",
  startDate: "",
  endDate: "",
  questions: [
    {
      id: -1,
      title: "",
      questionType: {
        id: -1,
        name: "",
      },
      questionIds: [
        {
          id: 1,
          content: "싫어함",
        },
        {
          id: 2,
          content: "보통",
        },
        {
          id: 3,
          content: "좋아함",
        },
      ],
    },
  ],
};

export const surveyApiState = atom({
  key: "surveyApi",
  default: defaultApi,
});

export const submitStates = atom({
  key: "submitStates",
  default: [false],
});

const submitConfirm = selector({
  key: "submitConfirm",
  get: ({ get }) => {
    const states = get(submitStates);
    let allConfirmed = true;
    states.forEach((isSubmitted) => {
      if (!isSubmitted) allConfirmed = false;
    });
    return allConfirmed;
  },
});

const Survey = ({ show }: ChatProps) => {
  const [surveyState, __] = useRecoilState(submitState);
  const [isStaff, ___] = useRecoilState(authorizationState);
  const [questionStates, _] = useRecoilState(submitStates);
  const submitAllDone = useRecoilValue(submitConfirm);
  const [surveyApi, setSurveyApi] = useRecoilState(surveyApiState);

  function getSurveyInfo() {
    const getSurveyInfo = async () => {
      await axios({
        url: `/surveys/${surveyId}`,
        method: "get",
        baseURL: `${baseUrl}`,
      })
        .then((res) => {
          const data = res.data;
          console.log(res.data);
          setSurveyApi({
            id: data.id,
            title: data.title,
            content: data.content,
            startDate: data.startDate,
            endDate: data.endDate,
            questions: [
              // tmp 나중에는 서버에서 받아올거임
              {
                id: 1,
                title: "만두를 얼마나 좋아하시나요?",
                questionType: {
                  id: 1,
                  name: "객관식",
                },
                questionIds: [
                  {
                    id: 1,
                    content: "싫어함",
                  },
                  {
                    id: 2,
                    content: "보통",
                  },
                  {
                    id: 3,
                    content: "좋아함",
                  },
                ],
              },
            ],
          });
        })
        .catch((error) => console.log(error));
    };
    getSurveyInfo();
  }

  useEffect(() => {
    getSurveyInfo();
  }, []);
  return (
    <SurveyWrapper className={show ? "hide" : ""}>
      <SurveyHeader>
        <ChatTop>설문조사</ChatTop>
        <SurveyTitle>{surveyApi.title}</SurveyTitle>
        <SurveyDescription>{surveyApi.content}</SurveyDescription>
      </SurveyHeader>
      <SurveyBody className={surveyState ? "done" : ""}>
        {surveyState ? (
          <h4>{isStaff ? checkMessage : thankYouMessage}</h4>
        ) : (
          <div>
            {surveyApi.questions.map((question, idx) => (
              <div key={idx}>
                <SurveyCreatorMsgBox>
                  Q{question.id}. {question.title}
                </SurveyCreatorMsgBox>
                <SurveyMessageBox
                  className={
                    questionStates[idx] ? "submitDone" : "submitUnDone"
                  }
                >
                  {question.questionType.id === 1 ? (
                    <SurveyChoice q_idx={idx} choose={question.questionIds} />
                  ) : (
                    <SurveyNarrative />
                  )}
                </SurveyMessageBox>
              </div>
            ))}
          </div>
        )}
      </SurveyBody>
      <SurveyFooter>
        {surveyState ? (
          ""
        ) : (
          <SurveySubmitBtn
            disabled={!submitAllDone}
            className={submitAllDone ? "success" : "fail"}
          >
            {submitAllDone ? "제출하기" : "답변을 입력해주세요"}
          </SurveySubmitBtn>
        )}
      </SurveyFooter>
    </SurveyWrapper>
  );
};

export default Survey;
