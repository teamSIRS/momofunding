import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import HomeBanners from "./HomeBanners";
import HomeFundings from "./HomeFundings";
import { NoneExist } from './HomeLiveCards/HomeLiveCard/NoneExist';
import { HomeLiveCard } from './HomeLiveCards/HomeLiveCard/HomeLiveCard';
import { baseUrl } from '../../App';

const StyledStack = styled(ListGroup)`
  display: flexbox;
  height: 18rem;
  overflow: auto;
`;

const Home = () => {
  const [lives, setLives] = useState<any[]>([""]);
  const [isExist, setIsExist] = useState<boolean>(true);

  const getLives = async() => {
    await axios({
      url:`/lives/search?order=popularity`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      setLives([...response.data]);
      if(response.data === "") setIsExist(false);
      else setIsExist(true);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getLives();
  }, []);


  return (
    <>
      <HomeBanners />
      <Container>
        <h2>지금 핫한 인기 라이브</h2>
        {
          isExist
          ? (<StyledStack horizontal>
                  {lives.map((live, idx) => (
                    <HomeLiveCard
                      key={idx}
                      idx={idx}
                      title={live.title}
                      viewer={live.viewerCount}
                      />
                  ))}
            </StyledStack>)
          : <NoneExist ment="진행 중인 라이브"/>
        }
      </Container>
      <HomeFundings />
    </>
  );
};

export default Home;
