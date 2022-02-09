//라이브 중인 프로젝트 카드
import styled from 'styled-components';
import {Container, Thumnail} from './Project.styled';
import LiveBadge from '../Home/Badge';

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
    border-radius: 50%;
`;

const CreatorName = styled.p`
    /* margin-left: 10px; */
`;


function ProjectLiveCard({ live }) {
    
    return (
    <div className="col-lg-6">
      <Container>
          <div className="position-absolute top-0 end-0">
            <LiveBadge content={"Live"} color={"red"}/>
          </div>
        <Thumnail src={''}/>
        <Detail>
            <Title>{live.title}</Title>
            <Creator>
                {/* <CreatorPic /> 이거 지우면서 밑에 마진 없앰 */}
                <CreatorName>{live.content}</CreatorName>
            </Creator>
        </Detail>
      </Container>
    </div>
    );
}

export default ProjectLiveCard;