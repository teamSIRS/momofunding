import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeBanner from "./HomeBanner";

const BannerCarouselItem = styled(Carousel.Item)`
  &: hover {
    cursor: pointer;
  }
`;
const BannerCarousel = styled(Carousel)`
  min-width: 820px;
`;

function HomeBanners() {
  const apis = [
    {
      title: "가구 하나로 집안의 전체 분위기를 바꿔보세요.",
      imgSrc: "/photo/furniture.jpg",
      slogan: "장인이 직접 만든 가구로 나만의 인테리어를 완성할 수 있습니다.",
      id: "1",
    },
    {
      title: "자유자재로 색상 변경이 가능한 스마트 조명",
      imgSrc: "/photo/bulbs.jpg",
      slogan: "조명 하나로 바뀌는 분위기를 경험하세요.",
      id: "2",
    },
    {
      title: "뽀송뽀송하고 부드러운 양말",
      imgSrc: "/photo/socks.jpg",
      slogan: "발에 땀이 많은 누구나 사용할 수 있는 양말입니다!",
      id: "3",
    },
  ];

  const navigate = useNavigate();
  const GoToPjt = (idx: string) => {
    if (idx === "1") {
      navigate("/projects/12");
    } else if (idx === "2") {
      navigate("/projects/14");
    } else {
      navigate("/projects/17");
    }
  };

  return (
    <BannerCarousel>
      {apis.map((api, idx) => (
        <BannerCarouselItem key={idx} onClick={() => GoToPjt(api.id)}>
          <HomeBanner
            index={idx}
            title={api.title}
            imgSrc={api.imgSrc}
            slogan={api.slogan}
          />
        </BannerCarouselItem>
      ))}
    </BannerCarousel>
  );
}

export default HomeBanners;
