import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import $ from "jquery";
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

const ProjectManagementContentProfileTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 150px;
`;

const ProjectManagementContentImgBox = styled.div`
  height: 200px;
`;

const ProjectManagementContentImg = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-right: auto;
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
  /* display: none; */
`;

const ProjectManagementContentProfileBtn = styled.button``;

function ProjectManagementProfile() {
  const baseUrl = "http://localhost:8080";
  //////////////////////////////////////////////////////////////////////
  const [creatorName, setCreatorName] = useState("");
  const [creatorImageUrl, setCreatorImageUrl] = useState("");
  const [creatorContent, setCreatorContent] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [account, setAccount] = useState("");
  //////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////
  const onCreatorNameChange = (event) => {
    setCreatorName(event.target.value);
  };
  const onCreatorImageUrlChange = (event) => {
    setCreatorImageUrl("");
  };
  const onCreatorContentChange = (event) => {
    setCreatorContent(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onTelChange = (event) => {
    setTel(event.target.value);
  };
  const onAccountChange = (event) => {
    setAccount(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////
  // 이거는 나중에 로그인한 회원의 아이디로 바꿔야함
  const projectId = 2;
  //////////////////////////////////////////////////////////////////////
  function getCreator() {
    const getCreator = async () => {
      await axios({
        url: `/creators/${projectId}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setCreatorName(response.data.creatorName);
          setCreatorImageUrl(response.data.creatorImageUrl);
          setCreatorContent(response.data.creatorContent);
          setEmail(response.data.email);
          setTel(response.data.tel);
          setAccount(response.data.account);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCreator();
  }

  function updateCreator(data) {
    console.log("업데이트하자");
    console.log(data);
    const formData = new FormData();
    formData.append("creatorName", data.creatorName);
    formData.append("creatorImageUrl", data.creatorImageUrl);
    formData.append("creatorContent", data.creatorContent);
    formData.append("email", data.email);
    formData.append("tel", data.tel);
    formData.append("account", data.account);
    const updateCreator = async () => {
      await axios({
        url: `/creators/${projectId}`,
        method: "post",
        data: { creator: formData },
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    updateCreator();
  }
  //////////////////////////////////////////////////////////////////////
  const postSave = (event) => {
    event.preventDefault();
    const data = {
      creatorName: creatorName,
      creatorImageUrl: creatorImageUrl,
      creatorContent: creatorContent,
      email: email,
      tel: tel,
      account: account,
    };
    console.log(data);
    const form = $("#form")[0];
    const formData = new FormData(form);
    formData.append("creatorImage", $("#file"));
    formData.append(
      "creator",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    //////////////////////////////////
    const updateCreator = async () => {
      await axios({
        url: `/creators/${projectId}`,
        method: "put",
        data: formData,
        baseURL: baseUrl,
        headers: { "Content-Type": "multipart/form-data" },
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
    updateCreator();
    //////////////////////////////////
    // $.ajax({
    //   type: "PUT",
    //   url: `${baseUrl}/creators/${projectId}`,
    //   processData: false,
    //   data: formData,
    // })
    //   .done(function () {
    //     alert("글이 등록되었습니다.");
    //     window.location.href = "/";
    //   })
    //   .fail(function (error) {
    //     console.log(error);
    //     // alert(JSON.stringify(error));
    //   });
  };
  //////////////////////////////////////////////////////////////////////

  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentProfileTitle>
          창작자 프로필 등록
        </ProjectManagementContentProfileTitle>
        <ProjectManagementContentForm
          id="form"
          method="put"
          encType="multipart/form-data"
        >
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              창작자 이름
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 이름을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              value={creatorName}
              onChange={onCreatorNameChange}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              창작자 프로필사진
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자 님의 프로필사진을 업로드하세요. (가로 1000px이상의 JPG,
              PNG, BMP 이미지 업로드 가능)
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput
              type="file"
              id="file"
              name="file"
            />

            <ProjectManagementContentImgLabel htmlFor="photo">
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg alt="example-image"></ProjectManagementContentImg>
            </ProjectManagementContentImgBox>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              자기소개
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님을 소개해주세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              value={creatorContent}
              onChange={onCreatorContentChange}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              이메일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 이메일을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              placeholder="example@email.com"
              value={email}
              onChange={onEmailChange}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              대표번호
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 대표번호를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              placeholder="- 없이 입력"
              value={tel}
              onChange={onTelChange}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              계좌정보
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 계좌정보를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              value={account}
              onChange={onAccountChange}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>
          <ProjectManagementContentProfileBtn onClick={postSave}>
            창작자 등록
          </ProjectManagementContentProfileBtn>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementProfile;
