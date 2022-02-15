//라이브 중인 프로젝트 카드
import styled from "styled-components";
import { Container, Thumnail } from "./Project.styled";
import LiveBadge from "../Home/Badge";

const Detail = styled.div`
  margin: 10px 0 5px 0;

  span {
    float: right;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Creator = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreatorPic = styled.div`
  width: 23px;
  height: 23px;
  background-image: url("https://pbs.twimg.com/profile_images/813380182291529728/mKDilml6_400x400.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const LiveContent = styled.p`
  margin: 0;
`;
const CreatorName = styled.p`
  margin: 0;
`;

function ProjectLiveCard({ live }) {
  return (
    <div>
      <Container>
        <div className="position-absolute" style={{ top: 15, right: 0 }}>
          <LiveBadge content={"Live"} color={"red"} />
        </div>
        <Thumnail src={""} />
        <Detail>
          <Title>{live.title}</Title>
          <Creator>
            {/* <CreatorPic></CreatorPic>  */}
            <LiveContent>{live.content}</LiveContent>
            <CreatorName>{live.creatorName}</CreatorName>
            <span>{live.viewerCount}명 시청</span>
          </Creator>
        </Detail>
      </Container>
    </div>
  );
}

export default ProjectLiveCard;
