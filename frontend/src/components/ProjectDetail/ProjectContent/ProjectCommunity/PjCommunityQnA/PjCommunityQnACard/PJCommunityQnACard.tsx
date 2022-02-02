import { Card } from "react-bootstrap";
import CardProfile from "./CardProfile";
import { QnACard } from "./styles";

export type QnACardProps = {
  username: string;
  content?: string;
  date: string;
};

export const PjCommunityQnACard = ({
  username,
  content,
  date,
}: QnACardProps) => {
  return (
    <QnACard>
      <CardProfile username={username} date={date}></CardProfile>

      <Card.Text>{content}</Card.Text>
      <hr />
    </QnACard>
  );
};
