import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import HomeBanners from "./HomeBanners";
import HomeFundings from "./HomeFundings";
import { NoneExist } from "./HomeLiveCards/HomeLiveCard/NoneExist";
import { HomeLiveCard } from "./HomeLiveCards/HomeLiveCard/HomeLiveCard";
import { baseUrl } from "../../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
const StyledStack = styled(ListGroup)`
  display: flex;
  height: 18rem;
  overflow: auto;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

const HomeMain = styled.div`
  background-color: whitesmoke;
`;

const Icon = styled.span`
  margin-left: 20px;
`;

const Home = () => {
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
              지금 핫한 인기 라이브
              <Icon>
                <FontAwesomeIcon icon={faHeadset} />
              </Icon>
            </b>
          </h2>
          {isExist ? (
            <StyledStack horizontal>
              {lives.map((live, idx) => (
                <Link
                  to={`/lives/${live.sessionId}`}
                  style={{ float: "left", marginLeft: 10, marginRight: 10 }}
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
      </HomeMain>
      <HomeFundings />
    </>
  );
};

export default Home;
