import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { baseUrl } from "../../../../../App";
import { SurveyItemWrapper, SurveyListWrapper } from "./styles";

// tmp
const projectId = 2;

type surveysProp = {
  id: number;
  title: string;
  endDate: string;
};

export const SelectedSurveyState = atom({
  key: "curSurvey",
  default: -1,
});

export const SurveyList = () => {
  const [surveys, setSurveys] = useState([] as surveysProp[]);
  const [_, setCurSurvey] = useRecoilState(SelectedSurveyState);
  const getSurveyList = async () => {
    await axios({
      url: `/surveys/projects/${projectId}`,
      method: "get",
      baseURL: `${baseUrl}`,
    })
      .then((res) => {
        const data: surveysProp[] = res.data;
        setSurveys(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  // constructor
  useEffect(() => {
    getSurveyList();
  }, []);

  return (
    <SurveyListWrapper>
      {surveys.map((survey, idx) => (
        <SurveyItemWrapper
          key={idx}
          onClick={() => {
            console.log(survey.id, "clicked!");
            setCurSurvey(survey.id);
          }}
        >
          {survey.title}
        </SurveyItemWrapper>
      ))}
    </SurveyListWrapper>
  );
};
