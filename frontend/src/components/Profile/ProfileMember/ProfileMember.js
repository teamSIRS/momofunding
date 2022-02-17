import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import setAuthorizationToken, {
  isLoginState,
  nicknameState,
} from "../../../atoms";
import { useRecoilState } from "recoil";
import swal from "sweetalert";
import { baseUrl } from "../../../App";

const ProfileMemberTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
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

// 닉네임
const ProfileMemberNicknameBox = styled.div`
  margin-bottom: 70px;
`;
const ProfileMemberNicknameLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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
  background-color: #f2f2f2;
  font-size: 15px;
`;
const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
  display: block;
  margin-left: 135px;
  margin-top: 5px;
`;

const ProfileMemberMain = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 900px;
`;

function ProfileMember() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state;
  // console.log(userId);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nName, setNname] = useRecoilState(nicknameState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const onNickNameChange = (event) => {
    setNickname(event.target.value);
  };

  function getUser() {
    const getUser = async () => {
      await axios({
        url: `/users/${userId}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          setNickname(response.data.nickname);
          setEmail(response.data.email);
          setPassword(response.data.password);

          setValue("nickname", response.data.nickname);
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
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          // console.log("회원 정보 수정 성공!");
          swal("회원 정보 수정 성공!", "", "success", { button: true });
          setNickname(response.data.nickname);
          setNname(nickname);

          setTimeout(() => {
            navigate("/users/myprojects");
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    updateUser();
  }

  function deleteUser() {
    console.log(userId);
    const deleteUser = async () => {
      await axios({
        url: `/users/${userId}`,
        method: "delete",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          swal("회원탈퇴", "다음에 또 모모펀딩을 찾아주세요", "success", {
            button: true,
          });
          setIsLogin(false);
          localStorage.removeItem("auth-token");
          // 로그인
          localStorage.removeItem("recoil-persist");
          // navigate("/");
          window.location.replace("/");
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
    if (password !== data.passwordNow) {
      setError(
        "passwordNow",
        { message: "현재 비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
      return;
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
      setValue("passwordNow", "");
      setValue("changePassword", "");
      setValue("changePasswordCheck", "");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <ProfileMemberMain>
        <ProfileMemberTitle>회원정보 수정 페이지</ProfileMemberTitle>
        <ProfileMemberBox>
          <ProfileMemberForm onSubmit={handleSubmit(onValid)}>
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
                  {...register("passwordNow", {
                    required: "현재비밀번호를 확인하세요.",
                  })}
                />
                <br />
                <ErrorMsg>{errors?.passwordNow?.message}</ErrorMsg>
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
              <ProfileMemberUpdateBtn as={"button"}>
                수정
              </ProfileMemberUpdateBtn>
              <ProfileMemberDeleteBtn as={"button"} onClick={deleteUser}>
                회원탈퇴
              </ProfileMemberDeleteBtn>
            </ProfileMemberBtnBox>
          </ProfileMemberForm>
        </ProfileMemberBox>
      </ProfileMemberMain>
    </div>
  );
}

export default ProfileMember;
