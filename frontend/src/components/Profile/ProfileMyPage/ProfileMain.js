import styled from "styled-components";
import { MomoColor } from "../../../shared/global";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useMatch } from "react-router-dom";

import FundProject from "./FundProject";
import MyProject from "./MyProject";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../atoms";
import { useEffect, useState } from "react";
import axios from "axios";
const Body = styled.div`
  padding: 80px 120px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  box-shadow: 4px 4px 20px 0px ${MomoColor};
  padding: 15px;
`;

//프로필 상자
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 25%;
  border-right: 1px solid #c8c8c8;
  p {
    margin: 3px 0;
  }
`;
const ProfilePic = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
const ProfileName = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
const ProfileInfo = styled.p`
  font-size: 15px;
`;
const ProfileMail = styled(ProfileInfo)`
  color: #7b7b7b;
`;
const EditBtn = styled(Link)`
  color: black;
  background-color: #c4c4c4;
  border-radius: 4px;
  font-size: 13px;
  padding: 7px;
  margin-top: 20px;
  text-decoration: none;
`;

//프로젝트 상자
const ProjectMainBox = styled.div`
  width: 85%;
  padding: 10px 20px;
`;

const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 8%;
`;

const Menu = styled.p`
  margin: 0 10px 0 10px;
  padding: 0 10px;
`;

const MyLink = styled(Link)`
  color: black;
  :hover {
    color: black;
  }
  :focus {
    font-weight: bold;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 92%;
  padding: 20px;
`;

const GoToProfile = styled.button`
  margin-top: 15px;
`;

function ProfileMain() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state;
  const myProjects = useMatch("/users/myprojects");
  const fundProjects = useMatch("/users/fundprojects");
  const onProfileMemberClick = () => {
    navigate("/profile/member", {
      state: {
        userId: userId,
      },
    });
  };
  /////////////////////////////////////////////////////
  const baseUrl = "http://localhost:8080";
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

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
  /////////////////////////////////////////////////////
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Body>
      <Container>
        <ProfileBox>
          <ProfilePic src="/photo/profile.png" />
          <ProfileName>{nickname}</ProfileName>
          <ProfileMail>{email}</ProfileMail>
          <GoToProfile onClick={onProfileMemberClick}>
            회원 정보 수정
          </GoToProfile>
        </ProfileBox>

        <ProjectMainBox>
          <Navbar>
            {/* 상단 메뉴 */}
            <Menu isActive={myProjects !== null}>
              <MyLink to={"/users/myprojects"}>창작한 프로젝트</MyLink>
            </Menu>
            <Menu isActive={fundProjects !== null}>
              <MyLink to={"/users/fundprojects"}>후원한 프로젝트</MyLink>
            </Menu>
          </Navbar>

          <ProjectBox>
            <Routes>
              <Route path="/myprojects" element={<MyProject />}></Route>
              <Route path="/fundprojects" element={<FundProject />}></Route>
            </Routes>
          </ProjectBox>
        </ProjectMainBox>
      </Container>
    </Body>
  );
}

export default ProfileMain;
