import styled from "styled-components";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import setAuthorizationToken from "../../../../atoms";
import { baseUrl } from "../../../../App";

const ProjectManagementMain = styled.div`
  width: 100%;
  min-height: 800px;
`;

const ProjectManagementContentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 50px;
`;

const ProjectManagementContentInputBox = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;
const ProjectManagementContentTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ProjectManagementContentMemo = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;
const ProjectManagementContentInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border-color: transparent;
  padding: 5px;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;
const ProjectManagementContentDate = styled.input``;

const ProjectManagementContentImgBox = styled.div`
  height: 300px;
`;

const ProjectManagementContentImg = styled.img`
  display: block;
  width: 80%;
  height: 100%;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 20px;
`;

const ProjectManagementContentImgLabel = styled.label`
  display: block;
  width: 70px;
  text-align: center;
  background-color: #6667ab;
  color: white;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  float: right;
`;
const ProjectManagementContentImgInput = styled.input`
  display: none;
`;

const ProjectManagementContentIntroTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;

const ProjectManagementContentProfileBtn = styled.button`
  margin: 0px 10px;
`;

function MyProjectManagementStory() {
  const [projectCategoryId, setProjectCategoryId] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [fundingGoal, setFundingGoal] = useState(0);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [subImageUrl, setSubImageUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [projectContent, setProjectContent] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  //////////////////////////////////////////////////////////////////////
  // onChangeEvent...
  const onProjectCategoryIdChange = (event) =>
    setProjectCategoryId(event.target.value);
  const onProjectNameChange = (event) => setProjectName(event.target.value);
  const onFundingGoalChange = (event) => setFundingGoal(event.target.value);
  const onMainImageUrlChange = (event) => setMainImageUrl(event.target.value);
  const onSubImageUrlChange = (event) => setSubImageUrl(event.target.value);
  const onSummaryChange = (event) => setSummary(event.target.value);
  const onProjectContentChange = (event) =>
    setProjectContent(event.target.value);
  const onExpirationDateChange = (event) => {
    console.log(event.target.value);
    setExpirationDate(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////
  // 이거는 나중에 로그인한 회원의 아이디로 바꿔야함
  const { id } = useParams();
  //////////////////////////////////////////////////////////////////////
  // get으로 사용자의 기존정보를 불러오기
  function getProject() {
    const getProject = async () => {
      await axios({
        url: `/projects/${id}`,
        method: "get",

        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setProjectCategoryId(response.data.projectCategoryId);
          setProjectName(response.data.projectName);
          setFundingGoal(response.data.fundingGoal);
          setMainImageUrl(response.data.mainImageUrl);
          setSubImageUrl(response.data.subImageUrl);
          setSummary(response.data.summary);
          setProjectContent(response.data.projectContent);
          setExpirationDate(response.data.expirationDate);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProject();
  }

  //////////////////////////////////////////////////////////////////////
  const formRef = useRef(null);

  const updateProject = (event) => {
    event.preventDefault();

    const data = {
      projectCategoryId: projectCategoryId,
      projectName: projectName,
      fundingGoal: fundingGoal,
      mainImageUrl: mainImageUrl,
      subImageUrl: subImageUrl,
      summary: summary,
      projectContent: projectContent,
      expirationDate: expirationDate + "T12:00:00",
    };

    const form = formRef[0];
    const formData = new FormData(form);

    formData.append(
      "project",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    formData.append("mainImage", $("#mainFile")[0].files[0]);
    formData.append("subImage", $("#subFile")[0].files[0]);

    const updateProject = async () => {
      await axios({
        url: `/projects/${id}`,
        method: "put",
        data: formData,
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
        processData: false,
        contentType: false,
      })
        .then((response) => {
          console.log("성공");
          console.log(response.data);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    updateProject();
  };
  //////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();

  function deleteProject() {
    const deleteProject = async () => {
      await axios({
        url: `/projects/${id}`,
        method: "delete",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    deleteProject();
  }

  //////////////////////////////////////////////////////////////////////
  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentIntroTitle>
          프로젝트 정보 수정
        </ProjectManagementContentIntroTitle>
        <ProjectManagementContentForm
          ref={formRef}
          enctype="multipart/form-data"
        >
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 제목
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 제목을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              value={projectName}
              onChange={onProjectNameChange}
            />
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              카테고리
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트에 알맞는 카테고리를 골라주세요.
            </ProjectManagementContentMemo>

            <select
              id="selectValue"
              value={projectCategoryId}
              onChange={onProjectCategoryIdChange}
            >
              <option value="1">푸드</option>
              <option value="2">리빙</option>
              <option value="3">가구</option>
              <option value="4">테크</option>
              <option value="5">패션</option>
              <option value="6">뷰티</option>
              <option value="7">스포츠</option>
              <option value="8">도서</option>
              <option value="9">굿즈</option>
              <option value="10">뮤직</option>
              <option value="11">게임</option>
            </select>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              펀딩 목표 금액
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 펀딩 목표 금액을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              value={fundingGoal}
              onChange={onFundingGoalChange}
            />
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              대표이미지
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 대표사진을 업로드하세요. (가로 1000px이상의
              JPG, PNG, BMP 이미지 업로드 가능)
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput
              type="file"
              id="mainFile"
              name="mainFile"
              onChange={onMainImageUrlChange}
            />
            <ProjectManagementContentImgLabel htmlFor="mainFile">
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src={mainImageUrl}
                alt="main-image-example"
              ></ProjectManagementContentImg>
            </ProjectManagementContentImgBox>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              소개사진
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 소개사진을 업로드하세요. (가로 1000px이상의
              JPG, PNG, BMP 이미지 업로드 가능)
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput
              type="file"
              id="subFile"
              name="subFile"
              onChange={onSubImageUrlChange}
            />
            <ProjectManagementContentImgLabel htmlFor="subFile">
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src={subImageUrl}
                alt="sub-image-example"
              ></ProjectManagementContentImg>
            </ProjectManagementContentImgBox>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 요약
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              프로젝트를 요약하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              value={summary}
              onChange={onSummaryChange}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 내용
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              프로젝트 내용을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              value={projectContent}
              onChange={onProjectContentChange}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 종료일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 종료일을 지정하세요
            </ProjectManagementContentMemo>
            <ProjectManagementContentDate
              type="date"
              value={expirationDate ? expirationDate.slice(0, 10) : null}
              onChange={onExpirationDateChange}
            />
          </ProjectManagementContentInputBox>
          <div>
            <ProjectManagementContentProfileBtn onClick={updateProject}>
              프로젝트 수정
            </ProjectManagementContentProfileBtn>
            <ProjectManagementContentProfileBtn onClick={deleteProject}>
              프로젝트 삭제
            </ProjectManagementContentProfileBtn>
          </div>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}
export default MyProjectManagementStory;
