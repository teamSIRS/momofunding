import styled from "styled-components";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import setAuthorizationToken from "../../../../atoms";
import { baseUrl } from "../../../../App";
import swal from "sweetalert";

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
  // display: none;
`;

const ProjectManagementContentIntroTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;

const ProjectManagementContentProfileBtn = styled.button`
  margin-left: 48px;
  background-color: green;
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

function MyProjectManagementStory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const nonCategory = [
    {
      id: 0,
      name: "선택하세요",
    },
  ];
  const [categories, setCategories] = useState([""]);

  const [projectCategoryId, setProjectCategoryId] = useState(0);
  const [projectState, setProjectState] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [fundingGoal, setFundingGoal] = useState(0);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [subImageUrl, setSubImageUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [projectContent, setProjectContent] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [buttonState, setButtonState] = useState(false);
  //////////////////////////////////////////////////////////////////////
  // onChangeEvent...
  const onProjectCategoryIdChange = (event) =>
    setProjectCategoryId(event.target.value);
  const onProjectNameChange = (event) => setProjectName(event.target.value);
  const onFundingGoalChange = (event) => setFundingGoal(event.target.value);
  const onMainImageUrlChange = (event) => {
    const tempImg = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      setMainImageUrl(e.target.result);
    };
    reader.readAsDataURL(tempImg);
  };
  const onSubImageUrlChange = (event) => {
    const tempImg = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      setSubImageUrl(e.target.result);
    };
    reader.readAsDataURL(tempImg);
  };
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
  function getCategories() {
    const getCategories = async () => {
      await axios({
        url: `/categories/`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          setCategories([...nonCategory, ...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategories();
  }
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
          setProjectState(response.data.projectStateId);
          setProjectName(response.data.projectName);
          setFundingGoal(response.data.fundingGoal);
          setMainImageUrl(response.data.mainImageUrl);
          setSubImageUrl(response.data.subImageUrl);
          setSummary(response.data.summary);
          setProjectContent(response.data.projectContent);
          if (response.data.expirationDate != null) {
            setExpirationDate(response.data.expirationDate.slice(0, 10));
            setValue(
              "expirationDate",
              response.data.expirationDate.slice(0, 10)
            );
          }

          console.log("프로젝트 상태");
          if (
            response.data.projectStateId === 2 ||
            response.data.projectStateId === 3
          ) {
            setButtonState(true);
          }
          console.log(response.data.projectStateId);

          setValue("projectCategoryId", response.data.projectCategoryId);
          setValue("projectName", response.data.projectName);
          setValue("fundingGoal", response.data.fundingGoal);
          setValue("mainFile", "");
          setValue("subFile", "");
          setValue("summary", response.data.summary);
          setValue("content", response.data.projectContent);
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
    // event.preventDefault();

    const data = {
      projectCategoryId: projectCategoryId,
      projectName: projectName,
      fundingGoal: fundingGoal,
      mainImageUrl: mainImageUrl.slice(0, 500),
      subImageUrl: subImageUrl.slice(0, 500),
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
          window.location.reload(true);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    updateProject();
  };

  //////////////////////////////////////////////////////////////////////
  const checkForm = (data) => {
    var canUpdate = true;
    if (data.projectCategoryId == 0) {
      setError("projectCategoryId", { message: "카테고리 선택은 필수입니다." });
      canUpdate = false;
    }
    if (data.fundingGoal <= 0) {
      setError("fundingGoal", { message: "목표금액은 0원 이상입니다." });
      canUpdate = false;
    }
    if (mainImageUrl === "") {
      setError("mainFile", { message: "대표 사진은 필수입니다." });
      canUpdate = false;
    }
    if (subImageUrl === "") {
      setError("subFile", { message: "소개 사진은 필수입니다." });
      canUpdate = false;
    }
    return canUpdate;
  };
  const onValid = (data) => {
    if (!checkForm(data)) {
      swal("프로젝트를 저장할 수 없어요! 다시 한 번 입력값을 확인해주세요.");
      window.scrollTo(0, 0);
      return;
    }
    updateProject(data);
  };

  useEffect(() => {
    getCategories();
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
          onSubmit={handleSubmit(onValid)}
        >
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 제목
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 제목을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("projectName", {
                required: "프로젝트 제목은 필수입니다.",
              })}
              value={projectName}
              onChange={onProjectNameChange}
            />
            <ErrorMsg>{errors?.projectName?.message}</ErrorMsg>
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
              as={"input"}
              {...register("projectCategoryId", {
                required: "카테고리 선택은 필수입니다.",
              })}
              value={projectCategoryId}
              onChange={onProjectCategoryIdChange}
            >
              {categories.map((category, idx) => (
                <option value={category.id} key={idx}>
                  {category.name}
                </option>
              ))}
            </select>
            <ErrorMsg>{errors?.projectCategoryId?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              펀딩 목표 금액
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 펀딩 목표 금액을 입력하세요 (숫자만 입력)
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("fundingGoal", {
                required: "목표 금액은 필수입니다.",
              })}
              value={fundingGoal}
              onChange={onFundingGoalChange}
            />
            <ErrorMsg>{errors?.fundingGoal?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              대표이미지
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 대표사진을 업로드하세요. (가로 1000px이상의
              JPG, PNG, BMP 이미지 업로드 가능)
              <ErrorMsg>{errors?.mainFile?.message}</ErrorMsg>
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput
              as={"input"}
              {...register("mainFile", {
                message: "대표 사진은 필수입니다.",
              })}
              type="file"
              id="mainFile"
              name="mainFile"
              onChange={onMainImageUrlChange}
            />

            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src={mainImageUrl}
                alt="No Image Available"
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
              <ErrorMsg>{errors?.subFile?.message}</ErrorMsg>
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput
              as={"input"}
              {...register("subFile", {
                message: "소개 사진은 필수입니다.",
              })}
              type="file"
              id="subFile"
              name="subFile"
              onChange={onSubImageUrlChange}
            />

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
              {...register("summary", {
                required: "프로젝트 요약은 필수입니다.",
              })}
              value={summary}
              onChange={onSummaryChange}
            ></ProjectManagementContentTextarea>
            <ErrorMsg>{errors?.summary?.message}</ErrorMsg>
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
              {...register("content", {
                required: "프로젝트 내용은 필수입니다.",
              })}
              value={projectContent}
              onChange={onProjectContentChange}
            ></ProjectManagementContentTextarea>
            <ErrorMsg>{errors?.content?.message}</ErrorMsg>
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
              {...register("expirationDate", {
                required: "프로젝트 종료일은 필수입니다.",
              })}
              value={expirationDate}
              onChange={onExpirationDateChange}
            />
            <ErrorMsg>{errors?.expirationDate?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>
          <div>
            <ProjectManagementContentProfileBtn
              // onClick={updateProject}
              disabled={buttonState}
            >
              프로젝트 수정
            </ProjectManagementContentProfileBtn>
          </div>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}
export default MyProjectManagementStory;
