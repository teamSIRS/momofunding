import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

export const ContribWrapper = styled.div`
  position: absolute;
  padding: 10px;
  height: 125px;
  top: 125px;
  right: 20px;
  background-color: rgba(255, 255, 255, 45%);
  border-radius: 15px;
`;

export const ContribTitle = styled.span`
  font-size: xx-large;
  color: dark;
`;

export const ContribTitleStrong = styled.span`
  font-size: xx-large;
  color: ${MomoColor};
`;
export const ContribContent = styled.span`
  font-size: x-large;
  color: dark;
`;
