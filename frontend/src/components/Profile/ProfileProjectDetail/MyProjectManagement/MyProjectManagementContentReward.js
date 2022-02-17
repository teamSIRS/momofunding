import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import setAuthorizationToken, { createRewardIdState } from "../../../../atoms";
import { baseUrl } from "../../../../App";
import swal from 'sweetalert';

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


const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;

const ProjectManagementContentProfileBtn = styled.button`
  margin-left: 48px;
`;

const ProjectManagementContentProfileUpdateBtn = styled(
  ProjectManagementContentProfileBtn
)`
  margin-left: 20px;
  background-color: green;
`;

const ProjectManagementContentProfileDeleteBtn = styled(
  ProjectManagementContentProfileUpdateBtn
)`
  background-color: red;
`;

const ProjectManagementContentProfileRadio = styled.label`
  font-size: 20px;
  margin-right: 30px;
  input {
    margin-right: 10px;
  }
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

// 수정? 삭제? 기능 추가해야함
function MyProjectManagementContentReward(props) {
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
  const { id } = useParams();
  // const projectId = useRecoilValue(createProjectIdState);
  const [rewardId, setRewardId] = useRecoilState(createRewardIdState);
  //////////////////////////////////////////////////////////////////////
  const getData = () => {
    setName(props.reward.name);
    setPrice(props.reward.price);
    setContent(props.reward.content);
    setOptionDescription(props.reward.optionDescription);
    setIsDeliver(props.reward.isDeliver);
    setLimitedQuantity(props.reward.limitedQuantity);
    const date = props.reward.deliverStartDate.slice(0, 10);
    setDeliverStartDate(date);
  }
  const checkUpdateData = (data) => {
    var canUpdate = true;
    if(data.name === ""){
      setError("name", { message: "리워드 명은 필수입니다." });
      canUpdate = false;
    }
    if(data.price === ""){
      setError("price", { message: "리워드 금액은 필수입니다." });
      canUpdate = false;
    }
    if(data.content === ""){
      setError("content", { message: "상세 설명은 필수입니다." });
      canUpdate = false;
    }
    if(data.optionDescription === ""){
      setError("optionDescription", { message: "옵션조건은 필수입니다." });
      canUpdate = false;
    }
    if(data.limitedQuantity === ""){
      setError("limitedQuantity", { message: "제한수량은 필수입니다." });
      canUpdate = false;
    }
    if(data.deliverStartDate === ""){
      setError("deliverStartDate", { message: "배송 시작일은 필수입니다." });
      canUpdate = false;
    }
    return canUpdate;
  }
  //////////////////////////////////////////////////////////////////////
  function saveRewards(data) {
    const saveRewards = async () => {
      await axios({
        url: `/rewards`,
        method: "post",
        data: {
          projectId: id,
          name: data.name,
          price: data.price,
          content: data.content,
          optionDescription: data.optionDescription,
          isDeliver: isDeliver,
          limitedQuantity: data.limitedQuantity,
          deliverStartDate: data.deliverStartDate+"T12:00:00",
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          setRewardId(response.data.id);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    saveRewards();
    props.setChangeData();
    window.location.reload(true);
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
      deliverStartDate: deliverStartDate+"T12:00:00",
    };

    const updateRewards = async () => {
      await axios({
        url: `/rewards/${props.reward.id}`,
        method: "put",
        data: data,
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          // console.log('ok');
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };

    if(!checkUpdateData(data)){
      swal("리워드를 수정할 수 없습니다! 입력값을 다시 확인해주세요.")
      return;
    }

    swal({
      title: "리워드를 수정하시겠습니까?",
      text: "리워드 수정 시, 다시 되돌릴 수 없습니다!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((response) => {
      if(response){
        updateRewards();
        props.setChangeData();
        swal("리워드가 수정되었습니다.").then((response) => {
          window.location.reload(true);
        });
      }
    });
  }
  //////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();

  function deleteRewards() {
    const deleteRewards = async () => {
      await axios({
        url: `/rewards/${props.reward.id}`,
        method: "delete",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log('ok');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    swal({
      title: "리워드를 삭제하시겠습니까?",
      text: "리워드 삭제 시, 다시 되돌릴 수 없습니다!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((response) => {
      if(response){
        deleteRewards();
        props.setChangeData();
        swal("리워드가 삭제되었습니다.").then(() => {
          window.location.reload(true);
        });
      }
    });
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
    getData();
  }, [props.reward]);
  
  return (
    <div>
      {
        (props.reward.id !== -1)
        ?
        (
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
            <ErrorMsg>{errors?.name?.message}</ErrorMsg>
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
            <ErrorMsg>{errors?.price?.message}</ErrorMsg>
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
            <ErrorMsg>{errors?.content?.message}</ErrorMsg>
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
            <ErrorMsg>{errors?.optionDescription?.message}</ErrorMsg>
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
            <ErrorMsg>{errors?.isDeliver?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              제한 수량
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              제한 수량을 입력하세요. (숫자만 입력)
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              {...register("limitedQuantity", {
                required: "제한수량은 필수입니다.",
              })}
              value={limitedQuantity}
              onChange={onLimitedQuantityChange}
            ></ProjectManagementContentInput>
            <ErrorMsg>{errors?.limitedQuantity?.message}</ErrorMsg>
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
              value={deliverStartDate}
              onChange={onDeliverStartDateChange}
            ></ProjectManagementContentDate>
            <br />
            <ErrorMsg>{errors?.deliverStartDate?.message}</ErrorMsg>
          </ProjectManagementContentInputBox>
          <div>
            {
              (props.reward.id === 0)
              ?(
                <ProjectManagementContentProfileBtn>
                  리워드 등록 및 추가
                </ProjectManagementContentProfileBtn>
              )
              :(
                <>
                <ProjectManagementContentProfileUpdateBtn onClick={updateRewards}>
                  리워드 수정
                </ProjectManagementContentProfileUpdateBtn>
                <ProjectManagementContentProfileDeleteBtn
                type="button"
                onClick={deleteRewards}
                >
                리워드 삭제
                </ProjectManagementContentProfileDeleteBtn>
              </>
              )
            }
          </div>
        </ProjectManagementContentForm>
        )
        :null
      }
    </div>
  );
}

export default MyProjectManagementContentReward;
