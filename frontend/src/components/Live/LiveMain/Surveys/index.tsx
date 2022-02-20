import axios from "axios";
import { FormEventHandler, useEffect, useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { baseUrl } from "../../../../App";
import setAuthorizationToken, { userIdState } from "../../../../atoms";
import { sessionState } from "../../LiveAtoms";
//import { ChatProps } from "../Chat";
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
  ThankYouBox,
} from "./styles";
import { SurveysNotExists, SurveyListWrapper } from "./SurveyList/styles";
import SurveyChoice from "./SurveyChoice";
import SurveyList from "./SurveyList";
import { SelectedSurveyState } from "./SurveyList/SurveyList";
import SurveyNarrative from "./SurveyNarrative";

const thankYouMessage = "설문에 참여해주셔서 감사합니다 🥰";

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

export type ChatProps = {
  show: boolean;
};

const Survey = ({ show }: ChatProps) => {
  // isSurveySubmitted: 유저의 제출 여부를 저장하는 state.
  // 디폴트는 false이고, 창작자가 서베이 아이디를 세션을 통해 보내면
  // curSurvey에 변동이 생기게 되도록 설계 돼 있는데,
  // 173번째 줄에서 curSurvey에 변동이 생길 때 (=== 창작자가 서베이를 뿌릴 때)
  // 서버에 유저 A가 curSurvey를 냈는지 확인해 보라는 요청을 보내고
  // 요청의 결과를 setSurveySubmitState로 저장합니다.
  // 그리고 컴포넌트는 isSurveySubmitted의 결과에 따라 유동적으로 움직입니다.
  const [isSurveySubmitted, setSurveySubmitState] =
    useRecoilState(surveySubmitState);
  const [isStaff, _1] = useRecoilState(authorizationState);
  const [questionStates, setQstates] = useRecoilState(surveySubmitStates);
  const submitAllDone = useRecoilValue(submitConfirm);
  const [surveyApi, setSurveyApi] = useRecoilState(surveyApiState);
  const [recoilSession, setSession] = useRecoilState(sessionState);
  const [curSurvey, setCurSurvey] = useRecoilState(SelectedSurveyState);
  const [userId, _2] = useRecoilState(userIdState);

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
          console.log("submit done!");
          console.log(response.data);
          getSurveySubmitted();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const isSurveyEmpty = () => curSurvey === -1;

  const getSurveySubmitted = async () => {
    const surveyNotYetGiven = curSurvey === -1;
    if (surveyNotYetGiven) return;
    await axios({
      url: `/surveys/${curSurvey}/users/${userId}`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        console.log(response.data.isSubmitted);
        setSurveySubmitState(response.data.isSubmitted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isStaff) {
      // 오직 참여자만 서베이 제출 여부를 재검사해야함
      return;
    }
    getSurveySubmitted();
    if (curSurvey != 0) getSurveyInfo();
  }, [curSurvey]);

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
      <SurveyBody
        className={isSurveySubmitted || isSurveyEmpty() ? "done" : ""}
      >
        {isSurveySubmitted ? (
          <>
            {isStaff ? (
              <SurveyList />
            ) : (
              <ThankYouBox>{thankYouMessage}</ThankYouBox>
            )}
          </>
        ) : (
          <>
            {isSurveyEmpty() ? (
              <SurveysNotExists>진행 중인 설문이 없습니다 😭</SurveysNotExists>
            ) : (
              <div>
                {surveyApi?.questions?.map((question, idx) => (
                  <div key={idx}>
                    <SurveyCreatorMsgBox>
                      Q{idx + 1}. {question.title}
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
        {isSurveySubmitted ? (
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
