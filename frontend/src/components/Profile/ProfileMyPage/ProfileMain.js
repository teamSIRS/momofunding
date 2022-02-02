import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';

const Body = styled.div`
    padding: 80px 120px;
    border: 2px solid blue;
`;

const Container = styled.div`
    display: flex;
    border-radius: 15px;
    box-shadow: 4px 4px 20px 0px ${MomoColor};
    border: 2px solid black;
    padding: 15px;
`;

//프로필 상자
const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    /* flex 세로 가운데 정렬 */
    padding: 50px 0;
    width: 30%;
    border: 2px solid rebeccapurple;
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
const EditBtn = styled.button`
    color: black;
    background-color: #C4C4C4;
    border-radius: 4px;
    font-size: 13px;
    padding: 7px;
    margin-top: 20px;
`;


//프로젝트 상자
const ProjectBox = styled.div`
    width: 80%;
    border: 2px solid green;
`;


function ProfileMain(){

    return(
        <Body>
            <Container>
                <ProfileBox>
                    <ProfilePic src="/photo/profile.png"/>
                    <ProfileName>아이조아</ProfileName>
                    <ProfileMail>hahhaah@naver.com</ProfileMail>
                    <ProfileInfo>간단한 소개글~!</ProfileInfo>
                    <EditBtn>회원 정보 수정</EditBtn>
                </ProfileBox>

                <ProjectBox>
                    {/* 여기에..탭 두개를 넣고 그 안에 카드를 불러온다(이미 만든거 사용) */}
                    
                </ProjectBox>

            </Container>
        </Body>
    );
}

export default ProfileMain;