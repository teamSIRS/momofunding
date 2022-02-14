import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LiveList from "./LiveRecord/LiveList";
import SurveyBasic from "./Survey/SurveyBasic";
import SurveyEdit from "./Survey/SurveyEdit";
import MySponsor from "./Sponsor/MySponsor";
import SurveyAdd from "../ProfileMyPage/SurveyAdd";
import { baseUrl } from "../../../App";
import {
  Body,
  ProjectBox,
  Card,
  ProjectPic,
  TitleBox,
  ProjectTitle,
  CreatorName,
  BtnBox,
  ManageBtn,
  LiveBtn,
  MainBox,
  LiveBox,
  Title,
  BottomBox,
  SurveyBox,
  SurveyTextBox,
  SurveyEditText,
  SponsorBox,
  SponsorList,
  ToNewLiveLink,
} from "./styles";
import setAuthorizationToken from "../../../atoms";
import styled from "styled-components";

const NoSurvey = styled.div`
  width: 90%;
  margin: 15px 0px;
  padding: 13px 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 7px 0 silver;
`;

const DeleteBtn = styled(ManageBtn)`
  background-color: transparent;
  button {
    background-color: transparent;
    color: red;
  }
`;

function MyProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [surveys, setSurveys] = useState([{ id: 0, title: "test" }]);
  const [isSurvey, setIsSurvey] = useState(false);
  const [lives, setLives] = useState("");
  const [sponsors, setSponsors] = useState([
    {
      id: 0,
      pic: "https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg",
      name: "test",
    },
  ]);

  const Project = async () => {
    await axios
      .get(baseUrl + "/projects/" + id)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Survey = async () => {
    await axios
      .get(baseUrl + "/surveys/projects/" + id)
      .then((res) => {
        setSurveys([...res.data]);
        if (surveys.length === 0) setIsSurvey(false);
        else setIsSurvey(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLiveList = async () => {
    await axios
      .get(baseUrl + "/lives/projects/" + id)
      .then((res) => {
        setLives([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRemove = async (id) => {
    await axios({
      url: baseUrl + "/surveys/" + id,
      method: "delete",
      headers: setAuthorizationToken(),
      baseUrl: baseUrl,
    })
      .then((res) => {
        // console.log('삭제완');
      })
      .catch((err) => {
        console.log(err);
      });
    setSurveys(surveys.filter((survey) => survey.id !== id));
  };

  const navigate = useNavigate();
  const goToManagePjt = () => {
    navigate(`/myproject/${id}/management/profile`);
  };

  function deletePjt() {
    const deletePjt = async () => {
      await axios({
        url: `/projects/${id}`,
        method: "delete",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          navigate("/users/myprojects");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    deletePjt();
  }

  useEffect(() => {
    Project();
    getLiveList();
  }, []);

  useEffect(() => {
    Survey();
  }, [isSurvey]);
  // Survey();

  return (
    <Body>
      <ProjectBox>
        <Card>
          <ProjectPic src={project.subImageUrl} />
          <TitleBox>
            <ProjectTitle>{project.summary}</ProjectTitle>
            <CreatorName>{project.projectName}</CreatorName>
          </TitleBox>
        </Card>
        <BtnBox>
          <ManageBtn>
            <button onClick={goToManagePjt}>프로젝트 관리</button>
          </ManageBtn>
          <ToNewLiveLink to={`/lives/new`}>
            <LiveBtn>라이브 켜기</LiveBtn>
          </ToNewLiveLink>
          <DeleteBtn>
            <button onClick={deletePjt}>프로젝트 삭제</button>
          </DeleteBtn>
        </BtnBox>
      </ProjectBox>

      <MainBox>
        <LiveBox>
          <Title>라이브 기록</Title>
          <LiveList lives={lives} key={lives.id} />
        </LiveBox>

        <BottomBox>
          <SurveyBox>
            <Title>설문조사 목록</Title>
            <SurveyTextBox>
              <SurveyAdd></SurveyAdd>
              {isEdit ? (
                <SurveyEditText
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                >
                  편집완료
                </SurveyEditText>
              ) : (
                <SurveyEditText
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                >
                  편집
                </SurveyEditText>
              )}
            </SurveyTextBox>
            {isSurvey ? (
              isEdit ? (
                // 설문조사 수정
                <>
                  {surveys.map((survey) => (
                    <SurveyEdit
                      survey={survey}
                      key={survey.id}
                      onRemove={onRemove}
                    />
                  ))}
                </>
              ) : (
                // 설문조사 기본
                <>
                  {surveys.map((survey) => (
                    <SurveyBasic survey={survey} key={survey.id} />
                  ))}
                </>
              )
            ) : (
              <NoSurvey>설문조사 없음</NoSurvey>
            )}
          </SurveyBox>

          <SponsorBox>
            <Title>참여한 후원자</Title>
            <SponsorList>
              {sponsors.map((sponsor) => (
                <MySponsor sponsor={sponsor} key={sponsor.id} />
              ))}
            </SponsorList>
          </SponsorBox>
        </BottomBox>
      </MainBox>
    </Body>
  );
}

export default MyProjectDetail;
