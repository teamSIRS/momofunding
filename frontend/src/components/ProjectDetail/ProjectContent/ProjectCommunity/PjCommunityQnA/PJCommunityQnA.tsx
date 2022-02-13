import PjCommunityInput from "./PjCommunityInput";
import PjCommunityQnACard from "./PjCommunityQnACard";
import { QnAWrapper } from "./styles";

const apis = [
  {
    username: "송지호",
    content:
      "처음으로 펀딩을 해보는데요 :)\n기대한 것 보다 많은 금액이 모여서 기분이 좋습니다!!!\n빨리 실물로 받아서 마셔보고 싶네요\n\n기념일이 얼마남지 않았어요!!",
    date: "2022-01-15",
  },
  {
    username: "백승윤",
    content:
      "술 못 먹는데 샴페인은 조금 마셔보고 싶어요. 빨리 나오면 좋겠네요!",
    date: "2022-01-13",
  },
  {
    username: "임건호",
    content: "질문은 아닌데 샴페인 진짜 맛있네요 감사합니다.",
    date: "2022-01-13",
  },
  {
    username: "샴페인 중독자",
    content: "지금 품절인데 추가 펀딩 예정 있으신가요?",
    date: "2022-01-12",
  },
];

export const PJCommunityQnA = () => {
  return (
    <>
      <h1>공사중</h1>
      <PjCommunityInput />
      <QnAWrapper>
        {apis.map((api, key) => (
          <PjCommunityQnACard
            username={api.username}
            content={api.content}
            date={api.date}
            key={api.username}
          />
        ))}
      </QnAWrapper>
    </>
  );
};
