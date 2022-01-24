import { ProgressBar } from "react-bootstrap";
import styled from 'styled-components';
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 20em;
    margin: 30px;

    div#thumbnail{
        width: 294px;
        height: 204px;
        background-size: cover;
        background-position: center;
        background-image: url('https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2019/04/20/95140278.1.jpg'); //////////
        /* background-image: ${(props) => props.img}; */
        border-radius: 15px;
    }
`;

const LiveOn = styled.div`
    color: white;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
    width: 51px;
    height: 24px;
    position: absolute;
    text-align: center;
    line-height: 24px;
    border-radius: 7px;
    right: 20px;
    top: 10px;
`;
 const TitleDetail = styled.div`
    display: inline-block;
    margin: 10px 5px 5px 5px;
    h5{
        display: inline;
        font-weight: bold;
    }
    
    span{
        float: right;
        font-size: 18px;
    }
 `;

 const FundDetail = styled.div`
    display: inline-block;
    margin: 5px;

    span{
        font-size: 15px;
    }
    span#percentage{
        float: left;
    }
    span#leftdays{
        float: right;
    }
 `;


// 프로젝트 리스트안에 하나의 카드(소세지 그림 + 설명)
function ProjectCard(props){
    let [live, setLive] = useState(true); //////
    return(
        <Container>
            {
                live //{props.live}
                ? <LiveOn>Live</LiveOn>
                : null
            }
            <div id="thumbnail"></div>
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
    );
}

export default ProjectCard;