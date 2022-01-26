//라이브 중인 프로젝트 카드
import styled from 'styled-components';
import LiveBadge from '../Home/Badge';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 500px;
`;

const Thumnail = styled.div`
    width: 500px;
    height: 277px;
    border-radius: 15px;
    background-image: url('https://cdn.emetro.co.kr/data2/content/image/2020/08/13/.cache/512/20200813500392.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
`;


const Detail = styled.div`
    margin: 10px 0 5px 0;

    span{
        float: right;
    }
    `;

const Title = styled.div`
    font-size: 20px;
`;

const Creator = styled.div`
    display: flex;
`;

const CreatorPic = styled.div`
    width:23px;
    height: 23px;
    background-image: url('https://pbs.twimg.com/profile_images/813380182291529728/mKDilml6_400x400.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50px;
`;

const CreatorName = styled.p`
    margin-left: 10px;
`;


function ProjectLiveCard() {
    return (
        <Container>
            <Thumnail>
                <div className="position-absolute top-0 end-0">
                    <LiveBadge content={"3,432 시청 | Live"} color={"red"}/>
                </div>
            </Thumnail>
            
            <Detail>
                <Title>라이브방송 제목</Title>
                <Creator>
                    <CreatorPic />
                    <CreatorName>창작자</CreatorName>
                </Creator>
            </Detail>         
        </Container>
    );
}

export default ProjectLiveCard;