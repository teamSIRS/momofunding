import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Row } from "react-bootstrap";
import { ProjectDetailWrapper } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../App";

export const ProjectDetail = () => {
  
  const { id } = useParams(); 
  // const [data, setData] = useState();
  let data = "";

  const getAPI = async() =>{
    await axios.get('http://localhost:8080/projects/'+id)
    .then((response) => {
      // console.log('1.레스폰스데이터', response.data);
      // let Data=[""];
      // console.log('2.',Data);
      // Data=(response.data);
      // console.log('3.Data타입',typeof Data);
      // console.log('4.data타입',typeof data);
      // setData(response.data);
      // console.log('5.Data 값', Data);
      // console.log('6.data 값', data);
      // ㅈㅅ.. 무시해주세요
      data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{
    getAPI();
  }, []);
  
  return (
    <ProjectDetailWrapper>
      <ProjectBanner />
      <Container>
        <Row>
          <ProjectContent />
          <ProjectSidebar />
        </Row>
      </Container>
    </ProjectDetailWrapper>
  );
};
