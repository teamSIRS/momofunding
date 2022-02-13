import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

export const ContribWrapper = styled.div`
  position: absolute;
  padding: 10px 0;
  height: 125px;
  top: 125px;
  right: 20px;
  background-color: rgba(255, 255, 255, 45%);
  border-radius: 15px;
`;

export const ContribTitle = styled.span`
  padding-right: 20px;
  font-size: xx-large;
  color: dark;
`;

export const ContribTitleStrong = styled.span`
  font-size: xx-large;
  color: ${MomoColor};
  padding-right: 20px;
`;
export const ContribContent = styled.span`
  padding-left: 20px;
  font-size: x-large;
  color: dark;
`;

export const Days = styled.div`
  display:flex;
  align-items: center;
  justify-content: right;
`;