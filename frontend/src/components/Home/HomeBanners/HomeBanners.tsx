import { appendFile } from "fs";
import { useState, BaseSyntheticEvent } from "react";
import { Carousel } from "react-bootstrap";
import HomeBanner from "./HomeBanner";

export const HomeBanners = () => {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIdx: number, e: BaseSyntheticEvent) => {
  //   setIndex(selectedIdx);
  // };
  const apis = [
    {
      title: "당신의 바리스타를 구독하세요",
      imgSrc:
        "https://assets.epicurious.com/photos/61649549804c6460b6ebfd7e/9:4/w_4994,h_2219,c_limit/BestDipCoffeeMaker_HERO_100821_4494_VOG_final.jpg",
      slogan: "101가지 최상의 떼루아를 머금은 커피를 매일 엄선해 보내드립니다.",
    },
    {
      title: "국가기능장 선생님 컬렉션",
      imgSrc: "http://www.gnnews.co.kr/news/photo/201802/321363_81726_5128.jpg",
      slogan: "Just Buy It",
    },
    {
      title: "당신의 바리스타를 구독하세요",
      imgSrc:
        "https://wgntv.com/wp-content/uploads/sites/5/2022/01/PabstGettyImages-1067958662.jpg",
      slogan: "101가지 최상의 떼루아를 머금은 커피를 매일 엄선해 보내드립니다.",
    },
  ];
  return (
    <Carousel>
      {apis.map((api, idx) => (
        <Carousel.Item>
          <HomeBanner
            index={idx}
            title={api.title}
            imgSrc={api.imgSrc}
            slogan={api.slogan}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
