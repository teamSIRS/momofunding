import { Card, Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import LiveBadge from "./Badge";
import { StyledSpan } from "./Badge/styles";
import HomeBanners from "./HomeBanners";
import HomeFundings from "./HomeFundings";
import {
  BadgeContainer,
  StyledCard,
  StyledCardImg,
} from "./HomeFundings/HomeFundingCard/styles";

const apis = [
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "CELTIVA 초특가 펀딩",
    watchers: 2378,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfMjM4/MDAxNjQyOTk5NjI5NTIx.xjNpUy4emnqFu01GNCm7FsO1I4e163uR-jhrA3Qorzkg.kY9HwrQG0tUdPC4uyT4JIU8OQ1tKC85RR0ge7xsWf1Yg.PNG/image.png?type=f320_480_q90",
  },
  {
    title: "쿤타 공연 실황",
    watchers: 6300,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "아이폰4",
    watchers: 2,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfMjM4/MDAxNjQyOTk5NjI5NTIx.xjNpUy4emnqFu01GNCm7FsO1I4e163uR-jhrA3Qorzkg.kY9HwrQG0tUdPC4uyT4JIU8OQ1tKC85RR0ge7xsWf1Yg.PNG/image.png?type=f320_480_q90",
  },
  {
    title: "테슬라 모델 Y",
    watchers: 1,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "길에서 주운 돌",
    watchers: 673231,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
  {
    title: "파티용 샴페인",
    watchers: 2678,
    imgSrc:
      "https://g-selected.pstatic.net/MjAyMjAxMjRfNTEg/MDAxNjQzMDIxOTUzMTYz.a8UvDLhi1iBdB3OMh3TduDrfu7Gq_qMbKa_uSfyCml4g.TapYtiXPsazh5Hw5QPWy0RabXSg_COjQCgLUGiWyesog.JPEG/B23657A9-FF08-47F1-B830-F60ABA345B7F.jpg?type=f320_480_q90",
  },
];

const StyledStack = styled(ListGroup)`
  display: flexbox;
  height: 18rem;
  overflow: scroll;
`;

const Home = () => {
  return (
    <>
      <HomeBanners />
      <Container>
        <h2>지금 핫한 인기 라이브</h2>
        <StyledStack horizontal>
          {apis.map((api, idx) => {
            return (
              <StyledCard key={idx} width={"175px"}>
                <StyledCardImg src={api.imgSrc}></StyledCardImg>
                <Card.ImgOverlay>
                  <StyledSpan color="rgba(0,0,0,54%)">
                    {api.title}
                    {api.watchers}
                  </StyledSpan>
                </Card.ImgOverlay>
                <BadgeContainer bottom={"15px"} left={"5px"}>
                  <LiveBadge content={"LIVE"} color={"momo"}></LiveBadge>
                </BadgeContainer>
              </StyledCard>
            );
          })}
        </StyledStack>
      </Container>
      <HomeFundings />
    </>
  );
};

export default Home;
