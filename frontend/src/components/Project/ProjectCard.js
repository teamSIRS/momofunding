// 프로젝트 리스트안에 하나의 카드(소세지 그림 + 설명)
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import LiveBadge from "../Home/Badge";
import {Container, Thumnail} from './Project.styled';

const LiveOn = styled.div`
  color: white;
  background-color: red;
  font-size: 16px;
  font-weight: bold;
  width: 48px;
  height: 22px;
  position: absolute;
  text-align: center;
  line-height: 22px;
  border-radius: 7px;
  right: 20px;
  top: 8px;
`;

const TitleDetail = styled.div`
  display: inline-block;
  margin: 10px 0 5px 0;
  h5 {
    display: inline;
    font-weight: bold;
  }

  span {
    float: right;
    font-size: 18px;
  }
`;

const FundDetail = styled.div`
  display: inline-block;
  margin: 5px;

  span {
    font-size: 15px;
  }
  span#percentage {
    float: left;
  }
  span#leftdays {
    float: right;
  }
`;

function ProjectCard(props) {
  let [live, setLive] = useState(true); //////
  return (
    <div className="col-md-4">
      <Container>
          <div className="position-absolute top-0 end-0">
              {live ? ( //{props.live}
                  // <LiveOn>Live</LiveOn>
                  <LiveBadge content={"Live"} color={"red"}/>
                  ) : null}
          </div>
        <Thumnail src={"https://media.istockphoto.com/photos/orange-bicycle-next-to-a-field-of-hyacinths-dutch-spring-landscape-picture-id1199838576"}/>
        <TitleDetail>
          <h5>프로젝트 제목</h5>
          <span>창작자</span>
          {/* {props.project.title} */}
          {/* {props.project.creator} */}
        </TitleDetail>
        <ProgressBar variant="warning" now={60} />
        <FundDetail>
          <span id="percentage">60% · 1258000원</span>
          <span id="leftdays">20일 남음</span>
        </FundDetail>
      </Container>
    </div>
  );
}

export default ProjectCard;
