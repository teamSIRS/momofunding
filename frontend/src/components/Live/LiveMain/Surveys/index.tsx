import axios from "axios";
import { FormEventHandler, useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { baseUrl } from "../../../../App";
import setAuthorizationToken from "../../../../atoms";
import { sessionState } from "../../LiveAtoms";
import { ChatProps } from "../Chat";
import { ChatTop } from "../Chat/styles";
import { authorizationState, surveySubmitState } from "../LiveMain";
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
import { SurveysNotExists, SurveyListWrapper } from "./SurveyList/styles";
import SurveyChoice from "./SurveyChoice";
import SurveyList from "./SurveyList";
import { SelectedSurveyState } from "./SurveyList/SurveyList";
import SurveyNarrative from "./SurveyNarrative";

const thankYouMessage = "설문에 참여해주셔서 감사합니다";

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

export const surveySubmitStates = atom({
  key: "submitStates",
  default: [] as any[],
});

const submitConfirm = selector({
  key: "submitConfirm",
  get: ({ get }) => {
    const states = get(surveySubmitStates);
    let allConfirmed = true;
    states?.forEach((isSubmitted) => {
      if (!isSubmitted) allConfirmed = false;
    });
    return allConfirmed;
  },
});

const Survey = ({ show }: ChatProps) => {
  const [surveyState, _0] = useRecoilState(surveySubmitState);
  const [isStaff, _1] = useRecoilState(authorizationState);
  const [questionStates, setQstates] = useRecoilState(surveySubmitStates);
  const submitAllDone = useRecoilValue(submitConfirm);
  const [surveyApi, setSurveyApi] = useRecoilState(surveyApiState);
  const [recoilSession, setSession] = useRecoilState(sessionState);
  const [curSurvey, setCurSurvey] = useRecoilState(SelectedSurveyState);

  const getSurveyInfo = async () => {
    await axios({
      url: `/surveys/${curSurvey}`,
      method: "get",
      baseURL: `${baseUrl}`,
    })
      .then((res) => {
        const data: apiForm = res.data;
        setSurveyApi(data);
        setQstates(
          data?.questions?.map((question, idx) => {
            if (question.questionType.id === 1) return 0;
            return "";
          })
        );
      })
      .catch((error) => console.log(error));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    questionStates.map((answer, idx) => {
      axios({
        url: `/survey-answers`,
        method: "post",
        baseURL: `${baseUrl}`,
        headers: setAuthorizationToken(),
        data: answer,
      })
        .then((response) => {
          // console.log("submit done!");
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const isSurveyEmpty = () => curSurvey === -1;

  useEffect(() => {
    if (curSurvey != 0) getSurveyInfo();
  }, [curSurvey]);

  useEffect(() => {
    // console.log(questionStates);
  }, [questionStates]);

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
            <SurveyTitle>
              {isSurveyEmpty() ? null : surveyApi.title}
            </SurveyTitle>
            <SurveyDescription>
              {isSurveyEmpty()
                ? "창작자가 진행하는 설문을 확인할 수 있습니다"
                : surveyApi.content}
            </SurveyDescription>
          </>
        )}
      </SurveyHeader>
      <SurveyBody className={surveyState || isSurveyEmpty() ? "done" : ""}>
        {surveyState ? (
          <>
            <h4>{isStaff ? <SurveyList /> : thankYouMessage}</h4>
          </>
        ) : (
          <>
            {isSurveyEmpty() ? (
              <SurveyBody className={"done"}>
                <SurveysNotExists>진행 중인 설문이 없습니다.</SurveysNotExists>
              </SurveyBody>
            ) : (
              <div>
                {surveyApi?.questions?.map((question, idx) => (
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
                        <SurveyChoice
                          surveyQuestionId={question.id}
                          q_idx={idx}
                          choose={question.selectIds}
                        />
                      ) : (
                        <SurveyNarrative
                          surveyQuestionId={question.id}
                          q_idx={idx}
                        />
                      )}
                    </SurveyMessageBox>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </SurveyBody>
      <SurveyFooter onSubmit={onSubmit}>
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
