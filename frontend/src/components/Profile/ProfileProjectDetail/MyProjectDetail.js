import React, { useState }from 'react';
import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { Link } from 'react-router-dom';

import LiveList from './LiveRecord/LiveList';
import SurveyBasic from './Survey/SurveyBasic';
import SurveyEdit from './Survey/SurveyEdit';
import MySponsor from './Sponsor/MySponsor';

const Body = styled.div`
    display: flex;
    padding: 50px;
`;

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 25%;
    padding: 20px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px 0px ${MomoColor};
`;

const ProjectPic = styled.div`
    width: 95%;
    height: 250px;
    margin: 10px;
    background-image: url('https://image.hmall.com/static/1/1/80/25/2125801100_0.jpg?RS=600x600&AR=0');
    background-position: center;
    background-size: cover;
`;

const TitleBox = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    border-top: 2px solid black;
    padding-top: 5px;
`;

const ProjectTitle = styled.p`
    font-weight: bold;
`;

const CreatorName = styled.p``;

const ProjectContent = styled.p`
    width: 95%;
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    margin: 20px 0;
`;

const ManageBtn = styled.div`
    background-color: ${MomoColor};
    color: white;
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    text-align:center;
    font-size: 20px;
    border-radius: 10px;
`;

const LiveBtn = styled(ManageBtn)`
    background-color: red;
`;

const MyLink = styled(Link)`
    text-decoration: none;
`;
//////////////////////

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    width: 75%;
`;

const LiveBox = styled.div`
    padding: 15px;
    margin-bottom: 30px;
`;

const Title = styled.p`
    font-size: 13pt;
    font-weight: bold;
`;

const BottomBox = styled.div`
    display: flex;
`;

const SurveyBox = styled(LiveBox)`
    width: 50%;
`;

const SurveyTextBox = styled.div`
    display: flex;
    margin: 5px 0;
`;

const SurveyAdd = styled.span`
    padding-left: 10px;
`;

const SurveyEditText = styled(SurveyAdd)`
    color: ${MomoColor};
`;


const SponsorBox = styled(LiveBox)`
    width: 50%;
`;

const SponsorList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


function MyProjectDetail(){
    const [surveys, setSurveys] = useState([
        {
            id: 0,
            title: "선호도 조사",
        },
        {
            id: 1,
            title: "구매 의사",
        },
        {
            id: 2,
            title: "추천 의사",
        },
        {
            id: 3,
            title: "피드백",
        }
    ]);
    const [isEdit, setIsEdit] = useState(false);

    const onRemove = (id) => {
        setSurveys(surveys.filter((survey) => survey.id !== id));
    }

    const [sponsors, setSponsors] = useState([
        {
            id: 0,
            pic: 'https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg',
            name: '송지호',
        },
        {
            id: 1,
            pic: 'https://nitter.domain.glass/pic/media%2FFHxHZMPakAAUwPi.jpg%3Fname%3Dsmall',
            name: '효달',
        },
        {
            id: 2,
            pic: 'https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg',
            name: '송지호',
        },
        {
            id: 3,
            pic: 'https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg',
            name: '송지호',
        },
        {
            id: 4,
            pic: 'https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg',
            name: '송지호',
        },
        {
            id: 5,
            pic: 'https://image.newdaily.co.kr/site/data/img/2011/02/10/2011021000033_0.jpg',
            name: '송지호',
        },
    ]);

    return(
        <Body>
            <ProjectBox>
                <Card>
                    <ProjectPic /> 
                    <TitleBox>
                        <ProjectTitle>보송보송 타올</ProjectTitle>
                        <CreatorName>아이조아</CreatorName>
                    </TitleBox>
                    <ProjectContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, inventore?</ProjectContent>
                </Card>

                <BtnBox>
                    <ManageBtn><MyLink to={`/projects/management`}>프로젝트 관리</MyLink></ManageBtn>
                    <LiveBtn>라이브 켜기</LiveBtn>
                </BtnBox>
            </ProjectBox>

            <MainBox>
                <LiveBox>
                    <Title>라이브 기록</Title>
                    <LiveList></LiveList>
                </LiveBox>

                <BottomBox>
                    <SurveyBox>
                        <Title>설문조사 목록</Title>
                        <SurveyTextBox>
                            <SurveyAdd>추가</SurveyAdd>
                            {
                                isEdit
                                ?(
                                    <SurveyEditText onClick={()=> {setIsEdit(!isEdit);}}>저장</SurveyEditText>
                                )
                                :(
                                    <SurveyEditText onClick={()=> {setIsEdit(!isEdit);}}>편집</SurveyEditText>
                                )

                            }
                        </SurveyTextBox>

                        {
                            isEdit 
                                ? (
                                    <>
                                    {surveys.map((survey) => (
                                        <SurveyEdit 
                                            survey={survey}
                                            key={survey.id}
                                            onRemove={onRemove}
                                        />
                                    ))}
                                    </>
                                )
                                : (
                                    <>
                                    {surveys.map((survey) => (
                                        <SurveyBasic 
                                            survey={survey}
                                            key={survey.id}
                                        />
                                    ))}
                                    </>
                                ) 

                        }
                    </SurveyBox>

                    <SponsorBox>
                        <Title>참여한 후원자</Title>
                        <SponsorList>
                            {sponsors.map((sponsor) => (
                                <MySponsor
                                    sponsor={sponsor}
                                    key={sponsor.id}
                                />
                            ))}
                        </SponsorList>
                    </SponsorBox>
                </BottomBox>

            </MainBox>
        </Body>
    );
}

export default MyProjectDetail;