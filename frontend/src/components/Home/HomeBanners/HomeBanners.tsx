import { Carousel } from "react-bootstrap";
import HomeBanner from "./HomeBanner";

export const HomeBanners = () => {
  const apis = [
    {
      title: "당신의 바리스타를 구독하세요",
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/04/22/02/36/barista-6197867_960_720.jpg",
      slogan: "101가지 최상의 떼루아를 머금은 커피를 매일 엄선해 보내드립니다.",
    },
    {
      title: "국가기능장 선생님 컬렉션",
      imgSrc: "https://cdn.pixabay.com/photo/2017/08/07/20/17/craftsmanship-2607408_960_720.jpg",
      slogan: "Just Buy It",
    },
    {
      title: "누구나 사용할 수 있는 순한 면수건",
      imgSrc:
        "https://cdn.pixabay.com/photo/2018/04/21/23/16/wool-3339803_960_720.jpg",
      slogan: "피부가 약하고 예민한 누구나 사용할 수 있는 순한 수건입니다!",
    },
  ];
  return (
    <Carousel>
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
    </Carousel>
  );
};
