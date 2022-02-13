import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

export const Text = styled.div`
  margin-left: 30px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 347px;
  border-radius: 20px;
  box-shadow: 4px 4px 20px 0px ${MomoColor};
  margin: 20px;
  padding: 20px 0;
`;

export const CardTitle = styled.p`
  margin: 20px;
  /* color: ${MomoColor}; */
  color: transparent;
  font-size: 20px;
  font-weight: bold;
`;
