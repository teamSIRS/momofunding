import styled from "styled-components";
import { MomoColor } from "../../../shared/global";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { baseUrl } from "../../../App";
import setAuthorizationToken, { userIdState } from "../../../atoms";
import MyProject from "./MyProject";
import { ProjectText } from "../../Live/LiveMain/Chat/styles";
import NonExist from "../../Project/NonExist";

const Body = styled.div`
  padding: 80px 100px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  box-shadow: 4px 4px 20px 0px ${MomoColor};
  padding: 15px;
  /* padding-bottom: 80px; */
`;

//프로필 상자
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px;
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
  font-size: 20px;
  padding-top: 8px;
`;
const ProfileInfo = styled.p`
  font-size: 15px;
`;
const ProfileMail = styled(ProfileInfo)`
  font-size: 18px;
  color: #7b7b7b;
`;
const EditBtn = styled.button`
  color: black;
  background-color: #c4c4c4;
  border-radius: 4px;
  font-size: 16px;
  padding: 7px 10px;
  margin-top: 150px;
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
  height: 40px;
`;

const Menu = styled.p`
  margin: 0 10px 0 10px;
  padding: 0 10px;
  font-weight: ${(props) => props.fontWeight};
`;

const MyLink = styled(Link)`
  color: black;
  :hover {
    color: black;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 92%;
  padding: 20px;
`;

const ProfileEditBtn = styled.button`
  margin-top: 15px;
`;

function ProfileMain() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);
  const [user, setUser] = useState([""]);
  const myProjects = useMatch("/users/myprojects");
  const fundProjects = useMatch("/users/fundprojects");
  const [isMy, setIsMy] = useState(true);
  const [isFund, setIsFund] = useState(false);
  const [projects, setProjects] = useState([""]);
  const [isExist, setIsExist] = useState(true);
  let isSelected = "";

  const getAPI = async () => {
    await axios
      .get(baseUrl + "/users/" + userId)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isMy) isSelected = "/creators";
  else if (isFund) isSelected = "/orders";
  function getProjects() {
    const getProjects = async () => {
      await axios
        .get(baseUrl + "/projects/users/" + userId + isSelected)
        .then((res) => {
          setProjects([...res.data]);
          if (res.data === "") setIsExist(false);
          else setIsExist(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProjects();
  }

  const goToProfileEdit = () => {
    navigate("/users/member", {
      state: {
        userId: userId,
      },
    });
  };

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    getProjects();
  }, [isMy, isFund, , isExist]);

  return (
    <Body>
      <Container>
        <ProfileBox>
          <ProfilePic src="/photo/profile.png" />
          <ProfileName>{user.nickname}</ProfileName>
          <ProfileMail>{user.email}</ProfileMail>
          {/* <ProfileInfo>간단한 소개글~!</ProfileInfo> */}
          {/* 위: DB에 없음,*/}
          <ProfileEditBtn onClick={goToProfileEdit}>
            회원 정보 수정
          </ProfileEditBtn>
        </ProfileBox>

        <ProjectMainBox>
          <Navbar>
            {/* 상단 메뉴 */}
            {isMy ? (
              <Menu fontWeight="bold">창작한 프로젝트</Menu>
            ) : (
              <Menu isActive={myProjects !== null}>
                <MyLink
                  to={"/users/myprojects"}
                  onClick={() => {
                    setIsMy(true);
                    setIsFund(false);
                  }}
                >
                  창작한 프로젝트
                </MyLink>
              </Menu>
            )}
            {isFund ? (
              <Menu fontWeight="bold">후원한 프로젝트</Menu>
            ) : (
              <Menu isActive={fundProjects !== null}>
                <MyLink
                  to={"/users/fundprojects"}
                  onClick={() => {
                    setIsMy(false);
                    setIsFund(true);
                  }}
                >
                  후원한 프로젝트
                </MyLink>
              </Menu>
            )}
          </Navbar>

          <ProjectBox>
            <Routes>
              <Route
                path="/myprojects"
                element={
                  <div className="container">
                    <div className="row">
                      {isExist ? (
                        projects.map((project) => (
                          <MyProject project={project} key={project.id} />
                        ))
                      ) : (
                        <NonExist ment="창작한 프로젝트" />
                      )}
                    </div>
                  </div>
                }
              ></Route>
              <Route
                path="/fundprojects"
                element={
                  <div className="container">
                    <div className="row">
                      {isExist ? (
                        projects.map((project) => (
                          <MyProject project={project} key={project.id} />
                        ))
                      ) : (
                        <NonExist ment="후원한 프로젝트" />
                      )}
                    </div>
                  </div>
                }
              ></Route>
            </Routes>
          </ProjectBox>
        </ProjectMainBox>
      </Container>
    </Body>
  );
}

export default ProfileMain;
