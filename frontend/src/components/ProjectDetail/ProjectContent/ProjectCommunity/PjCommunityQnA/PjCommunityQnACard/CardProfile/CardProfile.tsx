import { Card } from "react-bootstrap";
import { QnACardProps } from "../PJCommunityQnACard";
import { ProfileImg } from "../styles";
import { CardProfileWrapper } from "./styles";

export const CardProfile = ({ username, date }: QnACardProps) => {
  return (
    <CardProfileWrapper>
      <ProfileImg
        width="0px"
        src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="
      ></ProfileImg>
      <Card.Title>{username}</Card.Title>
      <Card.Text>{date}</Card.Text>
    </CardProfileWrapper>
  );
};
