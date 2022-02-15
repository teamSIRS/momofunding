import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const FooterMain = styled.footer`
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  bottom: 0px;
  /* position: fixed; */
`;

const FooterContentForm = styled.div`
  margin: 20px 0px;
`;

const FooterContentTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 15px;
`;

const FooterContent = styled.span`
  display: block;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const styles = {
  col: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    marginLeft: 0,
    marginRight: 0,
  },
  font: {
    fontSize: 13,
  },
};

function Footer() {
  return (
    <FooterMain>
      <Container>
        <Row>
          <Col style={styles.col} xs={4}>
            <FooterContentForm>
              <FooterContentTitle>고객센터</FooterContentTitle>
              <FooterContent>1588-1234</FooterContent>
              <br />
              <FooterContentTitle>상담 가능 시간</FooterContentTitle>
              <FooterContent>
                평일 오전 9시 ~ 오후 6시 <br />
                (주말, 공휴일 제외)
              </FooterContent>
            </FooterContentForm>
          </Col>
          <Col style={styles.col} xs={4}>
            <FooterContentForm>
              <FooterContentTitle>관리자 (24시간 접수 가능)</FooterContentTitle>
              <FooterContent>admin@momo_funding.com</FooterContent>
              <br />
              <FooterContentTitle>
                ssadiz는 통신판매중개자이며 통신판매 당사자가 아닙니다. 상품,
                상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
              </FooterContentTitle>
            </FooterContentForm>
          </Col>
          <Col style={styles.col} xs={4}>
            <FooterContentForm>
              <FooterLogo
                src="/Logos/momo_funding_logo.png"
                alt="momo-funding"
              />
              <FooterContentTitle>모모펀딩(주)</FooterContentTitle>
              <FooterContentTitle>
                서울시 강남구 테헤란로 212
              </FooterContentTitle>
              <FooterContent style={styles.font}>
                <br />© 2022 서울2반2조, Inc. All Rights Reserved
              </FooterContent>
            </FooterContentForm>
          </Col>
        </Row>
      </Container>
    </FooterMain>
  );
}

export default Footer;
