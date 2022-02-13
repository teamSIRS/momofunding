import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../../App';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 10px;
  text-align: center;
`;

export const ProjectStory = () => {
  const {id} = useParams();
  const [content, setContent] = useState("");
  
  const getApi = async() =>{
    await axios.get(baseUrl + '/projects/'+id)
    .then((res)=>{
      console.log(res.data.projectContent);
      setContent(res.data.projectContent);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getApi();
  }, []);

  return(
    <Container>
      {
          content.split('\n').map(line => {
            return (<span>{line}<br/></span>)
          })
      } 
    </Container>
  );
};
