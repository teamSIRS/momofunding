import React, { useState }from 'react';
import { Body, ProjectBox, Card, ProjectPic, TitleBox, ProjectTitle, 
    CreatorName, ProjectContent, BtnBox, ManageBtn, LiveBtn, MyLink,
    MainBox, LiveBox, Title, BottomBox, SurveyBox, SurveyTextBox, SurveyAdd,
    SurveyEditText, SponsorBox, SponsorList } from './styles';
import LiveList from './LiveRecord/LiveList';
import SurveyBasic from './Survey/SurveyBasic';
import SurveyEdit from './Survey/SurveyEdit';
import MySponsor from './Sponsor/MySponsor';




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