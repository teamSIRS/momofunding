import { Card } from "react-bootstrap";
import PjCommunityInput from "./PjCommunityInput";
import { QnAWrapper, QnACard } from "./styles";

export const PJCommunityQnA = () => {
  return (
    <>
      <PjCommunityInput />
      <QnAWrapper>
        <QnACard>프로젝트 카드</QnACard>
      </QnAWrapper>
    </>
  );
};
