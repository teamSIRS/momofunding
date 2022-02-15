import styled from "styled-components";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import setAuthorizationToken, { createProjectIdState } from "../../../atoms";
import { useRecoilValue } from "recoil";
import { baseUrl } from "../../../App";
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

const ProjectManagementContentProfileBtn = styled.button`
  margin-left: 48px;
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

function ProjectManagementProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const location = useLocation();
  // const { userId } = location.state;
  // const { projectId } = location.state;
  const projectId = useRecoilValue(createProjectIdState);
  const [creatorName, setCreatorName] = useState("");
  const [creatorImageUrl, setCreatorImageUrl] = useState("");
  const [creatorContent, setCreatorContent] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [account, setAccount] = useState("");

  const defaultMsg = baseUrl+"/creator/default.png";
  //////////////////////////////////////////////////////////////////////
  // onChangeEvent...
  const onCreatorNameChange = (event) => {
    setCreatorName(event.target.value);
  };
  const onCreatorImageUrlChange = (event) => {
    const tempImg = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
      setCreatorImageUrl(e.target.result);
    };
    reader.readAsDataURL(tempImg);
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
            setValue("creatorName", response.data.creatorName);
          } else {
            setCreatorName("");
          }
          if (response.data.creatorImageUrl) {
            setCreatorImageUrl(response.data.creatorImageUrl);

          } else {
            setCreatorImageUrl(defaultMsg);
          }
          if (response.data.creatorContent) {
            setCreatorContent(response.data.creatorContent);
            setValue("creatorContent", response.data.creatorContent);
          } else {
            setCreatorContent("");
          }
          if (response.data.email) {
            setEmail(response.data.email);
            setValue("email", response.data.email);
          } else {
            setEmail("");
          }
          if (response.data.tel) {
            setTel(response.data.tel);
            setValue("tel", response.data.tel);
          } else {
            setTel("");
          }
          if (response.data.account) {
            setAccount(response.data.account);
            setValue("account", response.data.account);
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
    // event.preventDefault(); // 새로고침 막기
    const data = {
      // json 데이터 만들기
      creatorName: creatorName,
      creatorImageUrl: creatorImageUrl.slice(0, 500),
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
          window.location.reload(true);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    updateCreator();
    // window.location.reload(true);
  };

  const onValid = (data) => {
    updateCreator();
  }

  useEffect(() => {
    getCreator();
    window.scrollTo(0, 0);
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
          onSubmit={handleSubmit(onValid)}
        >
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              창작자 이름
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 이름을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("creatorName", {
                required: "창작자 이름은 필수입니다.",
              })}
              value={creatorName}
              onChange={onCreatorNameChange}
            ></ProjectManagementContentInput>
            <ErrorMsg>{errors?.creatorName?.message}</ErrorMsg>
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

            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src={
                  creatorImageUrl === defaultMsg
                    ? "/photo/profile.png"
                    : creatorImageUrl
                }
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
              {...register("creatorContent", {
                required: "창작자 소개는 필수입니다.",
              })}
              value={creatorContent}
              onChange={onCreatorContentChange}
            ></ProjectManagementContentTextarea>
            <ErrorMsg>{errors?.creatorContent?.message}</ErrorMsg>
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
              as={"input"}
              {...register("email", {
                required: "이메일은 필수입니다.",
              })}
              value={email}
              onChange={onEmailChange}
            ></ProjectManagementContentInput>
            <ErrorMsg>{errors?.email?.message}</ErrorMsg>
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
              as={"input"}
              {...register("tel", {
                required: "대표번호는 필수입니다.",
              })}
              value={tel}
              onChange={onTelChange}
            ></ProjectManagementContentInput>
            <ErrorMsg>{errors?.tel?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              계좌정보
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 계좌정보를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("account", {
                required: "계좌번호는 필수입니다.",
              })}
              value={account}
              onChange={onAccountChange}
            ></ProjectManagementContentInput>
            <ErrorMsg>{errors?.account?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>
          <ProjectManagementContentProfileBtn>
            창작자 등록
          </ProjectManagementContentProfileBtn>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementProfile;
