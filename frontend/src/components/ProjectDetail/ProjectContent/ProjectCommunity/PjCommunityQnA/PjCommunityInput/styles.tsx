import { InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { MomoWeakColor } from "../../../../../../shared/global";

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  border: 1px solid ${MomoWeakColor};
  border-radius: 5px;
  background-color: rgba(230, 230, 250, 50%);
  padding: 12px 15px;
  justify-content: flex-start;
  align-items: center;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  min-height: auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 0px;
  height: 70px;
  resize: none;
  outline: none;
`;

export const InputStyle = styled(InputGroup);
