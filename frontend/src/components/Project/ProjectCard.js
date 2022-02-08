// 프로젝트 리스트안에 하나의 카드(소세지 그림 + 설명)
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import {Container, Thumnail} from './Project.styled';
import LiveBadge from "../Home/Badge";
import { Route, Router } from "react-router-dom";
import { Switch } from "../Live/LivePowderRoom/RTCRenderer/styles";

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
  display: flex;
  flex-direction: column;
  height: 55px;
  margin: 10px 0 5px 0;
`;

const ProjectTitle = styled.p`
  /* border: 1px solid orange; */
  /* width: 70%; */
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
const ProjectCreator = styled.p`
  /* border: 1px solid red; */
  /* text-align: right; */
  /* float: right; */
  /* width: 30%; */
  font-size: 16px;
  `;

///////////////////////////////////////
const FundDetail = styled.div`
  display: inline-block;
  margin: 5px;
  span {
    font-size: 15px;
  }
  span#percentage {
    float: left;
  }
`;

const Leftday = styled.span`
  float: right;
  color: ${ props => props.color };
`;

function ProjectCard({ project }) {
  
  let today = new Date();
  let dday = (project.expirationDate); //받아온 값
  let cdday = Date.parse(dday);
  let gap = cdday - today.getTime();
  let result = Math.ceil(gap / (1000*60*60*24));


  return (
    <div className="col-md-4">
      <Container onClick={()=>{console.log('클릭', project.id)}}>
          <div className="position-absolute top-0 end-0">
              {project.isLivePlaying 
                  ? <LiveBadge content={"Live"} color={"red"}/> 
                  : null
              }
          </div>
        <Thumnail src={project.subImageUrl}/>
        <TitleDetail>
          <ProjectTitle>
            {project.projectName.length > 25 ?`${project.projectName.slice(0, 25)}...`:project.projectName}
          </ProjectTitle>
          <ProjectCreator>{project.creatorName}</ProjectCreator>
        </TitleDetail>
        <ProgressBar variant="warning" now={project.popularity} />
        <FundDetail>
          <span id="percentage">{project.popularity}% · {project.currentAmount}원</span>
          {
            result < 5
            ? <Leftday color="red">{result}일 남음</Leftday>
            :  <Leftday color="black">{result}일 남음</Leftday>
          }
        </FundDetail>
      </Container>
    </div>
  );
}

export default ProjectCard;
