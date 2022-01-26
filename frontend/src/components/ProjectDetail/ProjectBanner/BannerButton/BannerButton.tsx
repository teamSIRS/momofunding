import { Button } from "react-bootstrap";
import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

export const Btn = styled(Button)`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: 140px;
  height: 55px;
  border: 0px;
  border-radius: 15px;
  font-size: 18px;
  color: white;
`;

export const GotoLiveBtn = styled(Btn)`
  background-color: tomato;
`;

export const NotLiveBtn = styled(Btn)`
  background-color: #c4c4c4;
`;

const ShareBtn = styled(Btn)`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: white;
  border: 5px solid ${MomoColor};
  border-radius: 50px;
  padding: 10px;

  img {
    display: block;
    padding: 2px 2px 0 0;
    width: 30px;
    height: 30px;
    margin: 0 auto;
  }
`;

type SocialBtnProps = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export const SocialBtn = ({ top, bottom, left, right }: SocialBtnProps) => (
  <ShareBtn top={top} bottom={bottom} left={left} right={right}>
    <img src="/icons/share.png" />
  </ShareBtn>
);
