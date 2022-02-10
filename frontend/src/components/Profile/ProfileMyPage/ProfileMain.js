import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { BrowserRouter, Routes,Route, Link, NavLink } from 'react-router-dom';

import { useMatch } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import FundProject from './FundProject';
import MyProject from './MyProject';
import ProjectCard from '../../Project/ProjectCard';

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
    align-items:center;
    padding: 50px 0;
    width: 25%;
    border-right: 1px solid #C8C8C8;
    p{
        margin: 3px 0;
    }
`;
const ProfilePic = styled.img`
    width: 85px;
    height: 85px;
    border-radius: 50%;
`;
const ProfileName = styled.p`
    font-weight: bold;
    font-size: 16px;
`;
const ProfileInfo = styled.p`
    font-size: 15px;
`;
const ProfileMail = styled(ProfileInfo)`
    color: #7B7B7B;
`;
const EditBtn = styled(Link)`
    color: black;
    background-color: #C4C4C4;
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
    :hover{
        color: black;
    }
    :focus{
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

function ProfileMain(){
    const myProjects = useMatch("/users/myprojects");
    const fundProjects = useMatch("/users/fundprojects")
    return(
        <Body>
            <Container>
                <ProfileBox>
                    <ProfilePic src="/photo/profile.png"/>
                    <ProfileName>아이조아</ProfileName>
                    <ProfileMail>hahhaah@naver.com</ProfileMail>
                    <ProfileInfo>간단한 소개글~!</ProfileInfo>
                    <EditBtn to={`/profile/member`}>회원 정보 수정</EditBtn>
                </ProfileBox>

                <ProjectMainBox>
                    <Navbar>
                    {/* 상단 메뉴 */}
                        <Menu isActive={myProjects !== null}>
                            <MyLink to={"/users/myprojects"}>
                                창작한 프로젝트
                            </MyLink>
                        </Menu>
                        <Menu isActive={fundProjects !== null}>
                            <MyLink to={'/users/fundprojects'}>
                                후원한 프로젝트
                            </MyLink>
                        </Menu>
                    </Navbar>

                    <ProjectBox>
                        <Routes>
                            <Route path='/myprojects' element={<MyProject/>}></Route>
                            <Route path='/fundprojects' element={<FundProject/>}></Route>
                        </Routes>
                    </ProjectBox>
                </ProjectMainBox>
            </Container>
        </Body>
    );
}

export default ProfileMain;