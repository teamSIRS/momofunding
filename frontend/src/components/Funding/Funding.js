// import { Container, Row } from "react-bootstrap";
import FundingBanner from "./FundingBanner";
import FundingContent from "./FundingContent";
import FundingSidebar from "./FundingSidebar";
import { Container, Body, Content, Side} from "../ProjectDetail/styles";

export const Funding = () => {
  return (
    <Container>
      <FundingBanner />
      <Body>
        <Content>
          <FundingContent/>
        </Content>
        <Side>
          <FundingSidebar/>
        </Side>
      </Body>
    </Container>
  );
};
