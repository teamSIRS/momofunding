import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import HomeBanner from "./HomeBanner";

export const HomeBanners = () => {
  const apis = [
    {
      title: "당신의 바리스타를 구독하세요",
      imgSrc:
        "https://cdn.pixabay.com/photo/2020/04/17/12/49/barista-5055060_960_720.jpg",
      slogan: "101가지 최상의 떼루아를 머금은 커피를 매일 엄선해 보내드립니다.",
    },
    {
      title: "국가기능장 선생님 컬렉션",
      imgSrc:
        "https://cdn.pixabay.com/photo/2018/05/12/19/00/drechsler-3394311_960_720.jpg",
      slogan: "Just Buy It",
    },
    {
      title: "누구나 사용할 수 있는 순한 면수건",
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/10/17/11/01/towels-4556644_960_720.jpg",
      slogan: "피부가 약하고 예민한 누구나 사용할 수 있는 순한 수건입니다!",
    },
  ];

  const BannerCarousel = styled(Carousel)`
    min-width: 820px;
  `;
  return (
    <BannerCarousel>
      {apis.map((api, idx) => (
        <Carousel.Item key={idx}>
          <HomeBanner
            index={idx}
            title={api.title}
            imgSrc={api.imgSrc}
            slogan={api.slogan}
          />
        </Carousel.Item>
      ))}
    </BannerCarousel>
  );
};
