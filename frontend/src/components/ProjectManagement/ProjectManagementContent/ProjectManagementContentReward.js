import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import setAuthorizationToken, {
  createProjectIdState,
  createRewardIdState,
} from "../../../atoms";
import { baseUrl } from "../../../App";

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

const ProjectManagementContentProfileBtn = styled.button`
  margin-left: 45px;
`;

const ProjectManagementContentProfileRadio = styled.label`
  font-size: 20px;
  margin-right: 30px;
  input {
    margin-right: 10px;
  }
`;

// 수정? 삭제? 기능 추가해야함
function ProjectManagementContentReward() {
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
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const onOptionDescriptionChange = (event) => {
    setOptionDescription(event.target.value);
  };
  const onIsDeliverChange = (event) => {
    setIsDeliver((prev) => !prev);
  };
  const onLimitedQuantityChange = (event) => {
    setLimitedQuantity(event.target.value);
  };
  const onDeliverStartDateChange = (event) => {
    setDeliverStartDate(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////
  // 이거는 나중에 로그인한 회원의 프로젝트로 바꿔야함
  const projectId = useRecoilValue(createProjectIdState);
  const [rewardId, setRewardId] = useRecoilState(createRewardIdState);
  //////////////////////////////////////////////////////////////////////
  function saveRewards(data) {
    console.log(data);
    const saveRewards = async () => {
      await axios({
        url: `/rewards`,
        method: "post",
        data: {
          projectId: projectId,
          name: data.name,
          price: data.price,
          content: data.content,
          optionDescription: data.optionDescription,
          isDeliver: isDeliver,
          limitedQuantity: data.limitedQuantity,
          deliverStartDate: data.deliverStartDate + "T12:00:00",
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setRewardId(response.data.id);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    saveRewards();
  }
  //////////////////////////////////////////////////////////////////////
  function getRewards() {
    const getRewards = async () => {
      await axios({
        url: `/rewards/projects/${projectId}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data[0]);
          setName(response.data[0].name);
          setPrice(response.data[0].price);
          setContent(response.data[0].content);
          setOptionDescription(response.data[0].optionDescription);
          setIsDeliver(response.data[0].isDeliver);
          setLimitedQuantity(response.data[0].limitedQuantity);
          setDeliverStartDate(response.data[0].deliverStartDate);
        })
        .catch((error) => {
          console.log("에러발생가져오기");
          console.log(error);
        });
    };
    getRewards();
  }

  //////////////////////////////////////////////////////////////////////
  function updateRewards(event) {
    event.preventDefault();
    const data = {
      name: name,
      price: price,
      content: content,
      optionDescription: optionDescription,
      isDeliver: isDeliver,
      limitedQuantity: limitedQuantity,
      deliverStartDate: deliverStartDate,
    };

    const updateRewards = async () => {
      await axios({
        url: `/rewards/${rewardId}`,
        method: "put",
        data: data,
        headers: setAuthorizationToken(),
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
    updateRewards();
  }
  //////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();

  function deleteRewards() {
    const deleteRewards = async () => {
      await axios({
        url: `/reawrds/${rewardId}`,
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
    deleteRewards();
  }

  //////////////////////////////////////////////////////////////////////

  const onValid = (data) => {
    if (data.isDeliver === "true") {
      setIsDeliver(true);
    } else {
      setIsDeliver(false);
    }
    saveRewards(data);
  };

  useEffect(() => {
    getRewards();
  }, []);
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
              value={name}
              onChange={onNameChange}
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
              value={price}
              onChange={onPriceChange}
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
              value={content}
              onChange={onContentChange}
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
              value={optionDescription}
              onChange={onOptionDescriptionChange}
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
              <input
                {...register("isDeliver")}
                type="radio"
                name="isDeliver"
                value="true"
                checked={isDeliver}
                onChange={onIsDeliverChange}
              />
              배송가능
            </ProjectManagementContentProfileRadio>
            <ProjectManagementContentProfileRadio>
              <input
                {...register("isDeliver")}
                type="radio"
                name="isDeliver"
                value="false"
                checked={!isDeliver}
                onChange={onIsDeliverChange}
              />
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
              value={limitedQuantity}
              onChange={onLimitedQuantityChange}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              배송 시작일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              배송 시작일을 지정해주세요
            </ProjectManagementContentMemo>
            <ProjectManagementContentDate
              type="date"
              {...register("deliverStartDate", {
                required: "배송 시작일은 필수입니다.",
              })}
              value={deliverStartDate.slice(0, 10)}
              onChange={onDeliverStartDateChange}
            ></ProjectManagementContentDate>
          </ProjectManagementContentInputBox>
          <div>
            <ProjectManagementContentProfileBtn>
              리워드 등록 및 추가
            </ProjectManagementContentProfileBtn>
            <ProjectManagementContentProfileBtn onClick={updateRewards}>
              리워드 수정
            </ProjectManagementContentProfileBtn>
          </div>
        </ProjectManagementContentForm>
      </ProjectManagementMain>
    </div>
  );
}

export default ProjectManagementContentReward;
