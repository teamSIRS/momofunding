import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

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
const ProjectManagementContentInput = styled.div`
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

const ProjectManagementContentRewardTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;

const ProjectManagementContentProfileBtn = styled.button``;

const ProjectManagementContentProfileRadio = styled.label`
  font-size: 20px;
  margin-right: 30px;
  input {
    margin-right: 10px;
  }
`;

function ProjectManagementContentReward() {
  const baseUrl = "http://localhost:8080";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();
  //////////////////////////////////////////////////////////////////////
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [optionDescription, setOptionDescription] = useState("");
  const [isDeliver, setIsDeliver] = useState(false);
  const [limitedQuantity, setLimitedQuantity] = useState(0);
  const [deliverStartDate, setDeliverStartDate] = useState("");
  //////////////////////////////////////////////////////////////////////
  // 이거는 나중에 로그인한 회원의 프로젝트로 바꿔야함
  const projectId = 1;
  //////////////////////////////////////////////////////////////////////
  function saveRewards(data) {
    const saveRewards = async () => {
      await axios({
        url: `/rewards`,
        method: "post",
        data: {},
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
    saveRewards();
  }
  //////////////////////////////////////////////////////////////////////
  const onValid = (data) => {
    saveRewards(data);
  };
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentRewardTitle>
          리워드 정보 등록
        </ProjectManagementContentRewardTitle>
        <ProjectManagementContentForm onSubmit={handleSubmit(onValid)}>
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              리워드 명
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              리워드 명을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("name", {
                required: "리워드 명은 필수입니다.",
              })}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              리워드 금액
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              리워드 금액을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("price", {
                required: "리워드 금액은 필수입니다.",
              })}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              상세 설명
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              상세 설명을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              {...register("content", {
                required: "상세 설명은 필수입니다.",
              })}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              옵션조건
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              옵션조건을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              {...register("optionDescription", {
                required: "옵션조건은 필수입니다.",
              })}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              배송조건
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              배송조건을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentProfileRadio>
              <input type="radio" value="1" name="deliver" checked />
              배송가능
            </ProjectManagementContentProfileRadio>
            <ProjectManagementContentProfileRadio>
              <input type="radio" value="2" name="deliver" />
              배송불가능
            </ProjectManagementContentProfileRadio>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              제한 수량
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              제한 수량을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("limitedQuantity", {
                required: "제한수량은 필수입니다.",
              })}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              배송 시작일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              배송 시작일을 지정해주세요
            </ProjectManagementContentMemo>
            <ProjectManagementContentDate type="date"></ProjectManagementContentDate>
          </ProjectManagementContentInputBox>
          <ProjectManagementContentProfileBtn>
            리워드 등록
          </ProjectManagementContentProfileBtn>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}

export default ProjectManagementContentReward;
