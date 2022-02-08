// 프로젝트 리스트안에 하나의 카드(소세지 그림 + 설명)
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import {Container, Thumnail} from './Project.styled';
import LiveBadge from "../Home/Badge";

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

function ProjectCard({ project }) {
  const [live, setLive] = useState(true); //////


  let dmonth = project.expirationDate[5] + project.expirationDate[6];
  let dday = project.expirationDate[8] + project.expirationDate[9];

  return (
    <div className="col-md-4">
      <Container>
          <div className="position-absolute top-0 end-0">
              {live ? ( //{props.live}
                  // <LiveOn>Live</LiveOn>
                  <LiveBadge content={"Live"} color={"red"}/>
                  ) : null}
          </div>
        <Thumnail src={project.subImageUrl}/>
        <TitleDetail>
          <h5>{project.projectName}</h5>
          <span>{project.creatorName}</span>
        </TitleDetail>
        <ProgressBar variant="warning" now={project.popularity} />
        <FundDetail>
          <span id="percentage">{project.popularity}% · {project.currentAmount}원</span>
          <span id="leftdays">{dmonth}월 {dday}일 까지</span>
        </FundDetail>
      </Container>
    </div>
  );
}

export default ProjectCard;
