import { Container } from "react-bootstrap";
import HomeBanners from "./HomeBanners";
import HomeFundings from "./HomeFundings";

const Home = () => {
  return (
    <>
      <HomeBanners />
      <Container>
        <HomeFundings />
      </Container>
    </>
  );
};

export default Home;
