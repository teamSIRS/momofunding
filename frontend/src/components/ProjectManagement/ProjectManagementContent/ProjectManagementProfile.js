import styled from "styled-components";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import setAuthorizationToken, { createProjectIdState } from "../../../atoms";
import { useRecoilValue } from "recoil";
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
  const imgBaseUrl = "http://localhost:8080/images/creator/";
  const location = useLocation();
  const { userId } = location.state;
  // const { projectId } = location.state;
  const projectId = useRecoilValue(createProjectIdState);
  const [creatorName, setCreatorName] = useState("");
  const [creatorImageUrl, setCreatorImageUrl] = useState("");
  const [creatorContent, setCreatorContent] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [account, setAccount] = useState("");

  //////////////////////////////////////////////////////////////////////
  // onChangeEvent...
  const onCreatorNameChange = (event) => {
    setCreatorName(event.target.value);
  };
  const onCreatorImageUrlChange = (event) => {
    setCreatorImageUrl("");
    //여기는 창작자가 에디터 화면에서 이미지를 삭제했을 때 "" 값으로 바꿔주는 동작만 되면 됩니다.
    // console.log(event.target.value.split("\\", 3)[2]);
    // setCreatorImageUrl(imgBaseUrl + event.target.value.split("\\", 3)[2]);
    // setCreatorImageUrl(imgBaseUrl + projectId + "_creator.jpg");
    // console.log(imgBaseUrl + projectId + "_creator.jpg");
    // src="http://localhost:8080/images/creator/22_creator.jpg"
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

  //////////////////////////////////////////////////////////////////////
  // get으로 사용자의 기존정보를 불러오기
  function getCreator() {
    const getCreator = async () => {
      await axios({
        url: `/creators/${projectId}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.creatorName) {
            setCreatorName(response.data.creatorName);
          } else {
            setCreatorName("");
          }
          if (response.data.creatorImageUrl) {
            setCreatorImageUrl(response.data.creatorImageUrl);
          } else {
            setCreatorImageUrl("");
          }
          if (response.data.creatorContent) {
            setCreatorContent(response.data.creatorContent);
          } else {
            setCreatorContent("");
          }
          if (response.data.email) {
            setEmail(response.data.email);
          } else {
            setEmail("");
          }
          if (response.data.tel) {
            setTel(response.data.tel);
          } else {
            setTel("");
          }
          if (response.data.account) {
            setAccount(response.data.account);
          } else {
            setAccount("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCreator();
  }

  //////////////////////////////////////////////////////////////////////
  // put으로 사용자가 입력한 내용 보내기 (json + file) 한 번에 보내는 방법
  // $ : jquery를 사용하기 위해서는 npm install jquery 해야함 => useRef으로 대체 가능
  const formRef = useRef(null); // useRef Hook를 통해서 form 태그 잡아오기

  const updateCreator = (event) => {
    event.preventDefault(); // 새로고침 막기
    const data = {
      // json 데이터 만들기
      creatorName: creatorName,
      creatorImageUrl: creatorImageUrl,
      creatorContent: creatorContent,
      email: email,
      tel: tel,
      account: account,
    };

    // const form = $("#form")[0]; =>  input file을 가지고 있는 form
    const form = formRef[0]; // useRef을 통해서 jquery대신 form태그를 잡아오는 방법
    const formData = new FormData(form); // new formData() 만들기 : file을 보내려면 필수!

    formData.append(
      "creator",
      new Blob([JSON.stringify(data)], { type: "application/json" })
      // 위에서 json으로 만든 data를 넣고 new Blob(미디어파일을 보내기 위함)에 넣기 type도 지정
    );
    formData.append("creatorImage", $("#file")[0].files[0]);
    //formData.append("creatorImage", null);

    const updateCreator = async () => {
      await axios({
        url: `/creators/${projectId}`,
        method: "put",
        data: formData, // 만들어 놓은 formData를 data값으로 넣기 끝!!
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
    updateCreator();
  };

  useEffect(() => {
    getCreator();
  }, []);
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentProfileTitle>
          창작자 프로필 등록
        </ProjectManagementContentProfileTitle>
        <ProjectManagementContentForm
          ref={formRef}
          enctype="multipart/form-data"
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
              onChange={onCreatorImageUrlChange}
            />

            <ProjectManagementContentImgLabel htmlFor="file">
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src={`http://localhost:8080/images/creator/${projectId}_creator.jpg`}
                alt="example-image"
              ></ProjectManagementContentImg>
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
          <ProjectManagementContentProfileBtn onClick={updateCreator}>
            창작자 등록
          </ProjectManagementContentProfileBtn>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementProfile;
