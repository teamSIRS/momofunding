import styled from "styled-components";

export const StyledSpan = styled.span`
  color: white;
  font-weight: 900;
  font-size: 15px;
  border: 0px;
  border-radius: 12px;
  padding: 3px;

  ${({ color }) => {
    switch (color) {
      case "red":
        return `background-color: ${"tomato"}`;
      case "green":
        return `background-color: ${"#44CBB3"}`;
      case "momo":
        return `background-color: ${"#6667AB"}`;
      default:
        return `background-color: ${color}`;
    }
  }};
`;
