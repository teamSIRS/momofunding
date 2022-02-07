import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProfileMemberTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;
// 회원정보 수정 전체 설정
const ProfileMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const ProfileMemberForm = styled.form``;

// 프로필 사진
const ProfileMemberImgBox = styled.div`
  height: 230px;
`;
const ProfileMemberImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border: solid 3px #6667ab;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 20px;
`;

const ProfileMemberImgLabel = styled.label`
  background-color: #6667ab;
  color: white;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  float: right;
`;
const ProfileMemberImgInput = styled.input`
  display: none;
`;

// 닉네임
const ProfileMemberNicknameBox = styled.div`
  margin-bottom: 30px;
`;
const ProfileMemberNicknameLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ProfileMemberNicknameInput = styled.div`
  display: block;
  width: 360px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;
// 자기소개
const ProfileMemberIntroduceBox = styled(ProfileMemberNicknameBox)``;
const ProfileMemberIntroduceLabel = styled(ProfileMemberNicknameLabel)``;
const ProfileMemberIntroduceInput = styled.div`
  display: block;
  width: 360px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;
// 비밀번호 수정
const ProfileMemberPasswordBox = styled(ProfileMemberNicknameBox)``;
const ProfileMemberPasswordInputBox = styled.div`
  margin-bottom: 10px;
`;

const ProfileMemberPasswordLabel = styled.div`
  width: 120px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;
const ProfileMemberPasswordInput = styled.div`
  width: 230px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;
// 버튼
const ProfileMemberBtnBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const ProfileMemberUpdateBtn = styled.div`
  width: 80px;
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
`;
const ProfileMemberDeleteBtn = styled.div`
  position: absolute;
  width: 80px;
  height: 30px;
  right: 0px;
  color: gray;
  background-color: white;
  font-size: 15px;
`;
const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
  display: block;
  margin-left: 135px;
  margin-top: 5px;
`;

function ProfileMember() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();
  const baseUrl = "http://localhost:8080";
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const onNickNameChange = (event) => {
    setNickname(event.target.value);
  };

  // 이거는 나중에 로그인한 회원의 아이디로 바꿔야함
  const userId = 12;

  function getUser() {
    const getUser = async () => {
      await axios({
        url: `/users/${userId}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setNickname(response.data.nickname);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }

  function updateUser(data) {
    const updateUser = async () => {
      await axios({
        url: `/users/${userId}`,
        method: "put",
        data: {
          nickname: data.nickname,
          password: data.changePassword,
        },
        baseURL: baseUrl,
      })
        .then((response) => {
          // console.log(response.data);
          setNickname(response.data.nickname);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    updateUser();
  }

  function deleteUser(data) {
    const deleteUser = async () => {
      await axios({
        url: `/users/${userId}`,
        method: "delete",
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
    deleteUser();
  }

  const onValid = (data) => {
    if (data.nickname !== "") {
      data.nickname = nickname;
    }
    if (data.changePassword !== data.changePasswordCheck) {
      setError(
        "changePasswordCheck",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      updateUser(data);
      console.log(data);
      setValue("password", "");
      setValue("changePassword", "");
      setValue("changePasswordCheck", "");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <ProfileMemberTitle>회원정보 수정 페이지</ProfileMemberTitle>
      <ProfileMemberBox>
        <ProfileMemberForm onSubmit={handleSubmit(onValid)}>
          <ProfileMemberImgBox>
            <ProfileMemberImg src="/photo/profile.png" />
            <ProfileMemberImgLabel for="profile_photo">
              사진변경
            </ProfileMemberImgLabel>
            <ProfileMemberImgInput type="file" id="profile_photo" />
          </ProfileMemberImgBox>

          <ProfileMemberNicknameBox>
            <ProfileMemberNicknameLabel as={"label"}>
              이메일[아이디]
            </ProfileMemberNicknameLabel>
            <ProfileMemberNicknameInput
              as={"input"}
              value={email}
              disabled
            ></ProfileMemberNicknameInput>
          </ProfileMemberNicknameBox>
          <ProfileMemberNicknameBox>
            <ProfileMemberNicknameLabel as={"label"}>
              닉네임
            </ProfileMemberNicknameLabel>
            <ProfileMemberNicknameInput
              as={"input"}
              {...register("nickname")}
              onChange={onNickNameChange}
              value={nickname}
            />
          </ProfileMemberNicknameBox>

          <ProfileMemberPasswordBox>
            <ProfileMemberPasswordInputBox>
              <ProfileMemberPasswordLabel as={"label"}>
                현재 비밀번호
              </ProfileMemberPasswordLabel>
              <ProfileMemberPasswordInput
                as="input"
                type="password"
                {...register("password", {
                  required: "현재비밀번호를 확인하세요.",
                })}
              />
              <br />
              <ErrorMsg>{errors?.password?.message}</ErrorMsg>
            </ProfileMemberPasswordInputBox>
            <ProfileMemberPasswordInputBox>
              <ProfileMemberPasswordLabel as={"label"}>
                비밀번호 변경
              </ProfileMemberPasswordLabel>
              <ProfileMemberPasswordInput
                as="input"
                type="password"
                {...register("changePassword")}
              />
            </ProfileMemberPasswordInputBox>
            <ProfileMemberPasswordInputBox>
              <ProfileMemberPasswordLabel as={"label"}>
                비밀번호 변경 확인
              </ProfileMemberPasswordLabel>
              <ProfileMemberPasswordInput
                as="input"
                type="password"
                {...register("changePasswordCheck")}
              />
              <br />
              <ErrorMsg>{errors?.changePasswordCheck?.message}</ErrorMsg>
            </ProfileMemberPasswordInputBox>
          </ProfileMemberPasswordBox>
          <ProfileMemberBtnBox>
            <ProfileMemberUpdateBtn as={"button"}>수정</ProfileMemberUpdateBtn>
            <ProfileMemberDeleteBtn as={"button"} onClick={deleteUser}>
              회원탈퇴
            </ProfileMemberDeleteBtn>
          </ProfileMemberBtnBox>
        </ProfileMemberForm>
      </ProfileMemberBox>
    </div>
  );
}

export default ProfileMember;
