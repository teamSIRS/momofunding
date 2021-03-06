import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 150px;
`;

export const Info = styled.div`
  width: 500px;
  height: 70px;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChangePwForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input.attrs({ required: true })`
  width: 500px;
  height: 58px;
  margin-bottom: 15px;
  background-color: #dddeed;
  border: none;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export const Btn = styled.button`
  width: 500px;
  height: 58px;
  margin: 15px;
  color: black;
  background-color: #b0e0e6;
  border: none;
  :hover {
    background-color: #8bdae3;
  }
`;
