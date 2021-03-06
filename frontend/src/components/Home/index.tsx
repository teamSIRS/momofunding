import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup, Navbar } from "react-bootstrap";
import styled from "styled-components";
import HomeBanners from "./HomeBanners";
import HomeFundings from "./HomeFundings";
import { NoneExist } from "./HomeLiveCards/HomeLiveCard/NoneExist";
import { HomeLiveCard } from "./HomeLiveCards/HomeLiveCard/HomeLiveCard";
import { baseUrl } from "../../App";
import { Link } from "react-router-dom";

const StyledStack = styled(ListGroup)`
  display: flex;
  height: 18rem;
  overflow: auto;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

const HomeMain = styled.div``;

const Icon = styled.span`
  margin-left: 5px;
`;

const ProjectEntranceSeparateLine = styled.hr`
  background-color: #6667ab;
  width: 75%;
  margin: 40px auto;
`;

const MiniText = styled.span`
  font-size: 15px;
`;

const Home = () => {
  window.scrollTo(0, 0);
  const [lives, setLives] = useState<any[]>([""]);
  const [isExist, setIsExist] = useState<boolean>(true);

  const getLives = async () => {
    await axios({
      url: `/lives/search?order=popularity`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        setLives([...response.data]);
        if (response.data === "") setIsExist(false);
        else setIsExist(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLives();
  }, []);

  return (
    <>
      <HomeBanners />
      <HomeMain>
        <Container>
          <br />
          <h2>
            <b>
              지금 핫한 인기 라이브<Icon>🔥</Icon>
            </b>
          </h2>
          <MiniText>다른 사람들은 지금 어떤 상품을 보고 있을까?</MiniText>
          {isExist ? (
            <StyledStack horizontal>
              {lives.map((live, idx) => (
                <Link
                  to={`/lives/${live.sessionId}/${live.projectId}`}
                  style={{ float: "left", marginLeft: 10, marginRight: 10 }}
                  key={idx}
                >
                  <HomeLiveCard
                    key={idx}
                    idx={idx}
                    title={live.title}
                    viewer={live.viewerCount}
                    subImg={live.subImageUrl}
                  />
                </Link>
              ))}
            </StyledStack>
          ) : (
            <NoneExist ment="진행 중인 라이브" />
          )}
        </Container>
        <ProjectEntranceSeparateLine />
      </HomeMain>
      <HomeFundings />
    </>
  );
};

export default Home;
