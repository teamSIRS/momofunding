import { Container, Row } from "react-bootstrap";
import FundingBanner from "./FundingBanner";
import FundingContent from "./FundingContent";
import FundingSidebar from "./FundingSidebar";

export const Funding = () => {
  return (
    <div>
      <FundingBanner />
      <Container>
        <Row>
          <FundingContent />
          <FundingSidebar />
        </Row>
      </Container>
    </div>
  );
};
