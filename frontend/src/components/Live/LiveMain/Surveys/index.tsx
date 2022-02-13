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
import SurveyList from "./SurveyList";
import SurveyNarrative from "./SurveyNarrative";

const thankYouMessage = "설문에 참여해주셔서 감사합니다";

const surveyId = 1;

type questionForm = {
  id: number;
  title: string;
  questionType: {
    id: number;
    name: string;
  };
  selectIds: {
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
      selectIds: [
        {
          id: 1,
          content: "싫어함",
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
  default: [] as boolean[],
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
  const [surveyState, _0] = useRecoilState(submitState);
  const [isStaff, _1] = useRecoilState(authorizationState);
  const [questionStates, setQstates] = useRecoilState(submitStates);
  const submitAllDone = useRecoilValue(submitConfirm);
  const [surveyApi, setSurveyApi] = useRecoilState(surveyApiState);

  const getSurveyInfo = async () => {
    await axios({
      url: `/surveys/${surveyId}`,
      method: "get",
      baseURL: `${baseUrl}`,
    })
      .then((res) => {
        const data: apiForm = res.data;
        setSurveyApi(data);
        setQstates(
          data.questions.map((question, idx) => {
            if (question.questionType.id === 1) return false;
            return true;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSurveyInfo();
  }, []);

  return (
    <SurveyWrapper className={show ? "hide" : ""}>
      <SurveyHeader>
        <ChatTop>설문조사</ChatTop>
        {isStaff ? (
          <>
            <SurveyTitle>설문 목록</SurveyTitle>
            <SurveyDescription>
              창작자께서 사전에 설정한 설문 목록입니다. 방송 시청자를 대상으로
              배포할 설문을 선택해주세요
            </SurveyDescription>
          </>
        ) : (
          <>
            <SurveyTitle>{surveyApi.title}</SurveyTitle>
            <SurveyDescription>{surveyApi.content}</SurveyDescription>
          </>
        )}
      </SurveyHeader>
      <SurveyBody className={surveyState ? "done" : ""}>
        {surveyState ? (
          <>
            <h4>{isStaff ? <SurveyList /> : thankYouMessage}</h4>
          </>
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
                    <SurveyChoice q_idx={idx} choose={question.selectIds} />
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
