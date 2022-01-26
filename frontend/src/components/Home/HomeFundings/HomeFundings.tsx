import { Button, Col, Container, Row } from "react-bootstrap";
import HomeFundingCard from "./HomeFundingCard";

export const HomeFundings = () => {
  const apiLarge = {
    title: "테스트용 타이틀1",
    progress: "1086% 초과 달성!",
    imgSrc:
      "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/361ce6f682af56e5421e0a86d44a6fe37d799ac0/cd2062d2e9aa90d157b3fe7a5bace351c00d8b1f/a6fd36b0-e132-4807-a98f-9faa0c5fae03.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=af8e4baf5cbe5cfd092d10a7d3396b41",
    projectPath: "",
  };

  const apis = [
    {
      title: "테스트용 타이틀1",
      imgSrc:
        "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/361ce6f682af56e5421e0a86d44a6fe37d799ac0/cd2062d2e9aa90d157b3fe7a5bace351c00d8b1f/a6fd36b0-e132-4807-a98f-9faa0c5fae03.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=af8e4baf5cbe5cfd092d10a7d3396b41",
      projectPath: "",
    },
    {
      title: "테스트용 타이틀2",
      imgSrc:
        "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/361ce6f682af56e5421e0a86d44a6fe37d799ac0/cd2062d2e9aa90d157b3fe7a5bace351c00d8b1f/a6fd36b0-e132-4807-a98f-9faa0c5fae03.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=af8e4baf5cbe5cfd092d10a7d3396b41",
      projectPath: "",
    },
  ];
  return (
    <Container>
      <h2>인기 펀딩 목록</h2>
      <Row md={1} lg={2} className="g-4">
        <Col>
          <HomeFundingCard
            title={apiLarge.title}
            imgSrc={apiLarge.imgSrc}
            progress={apiLarge.progress}
            projectPath={apiLarge.projectPath}
            height={"300px"}
            width={"400px"}
          ></HomeFundingCard>
        </Col>
        <Col>
          {apis.map((api, idx) => (
            <HomeFundingCard
              key={idx}
              title={api.title}
              imgSrc={api.imgSrc}
              projectPath={api.projectPath}
              height={"140px"}
              width={"400px"}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
