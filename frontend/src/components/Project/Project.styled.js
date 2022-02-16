import styled from "styled-components";

export const ListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0 auto;
  width: 80%;
  span {
    margin: 10px;
  }
`;

export const Category = styled.div`
  margin: auto 0;
`;

export const Search = styled.div`
  display: flex;
  margin: 10px 10px;
  input {
    text-align: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 17px;
    margin-left: 15px;
    padding-left: 15px;
  }
  svg {
    width: 25px;
    height: 25px;
    margin: 0 30px 0 10px;
  }
  p {
    margin: 3px 10px;
  }
`;

export const Bar = styled.hr`
  display: flex;
  margin: 0 auto;
  width: 83%;
  size: 10px;
`;

export const ListFilter = styled.p``;

export const ListFilterSelected = styled.p`
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 30px 15px;
  &: hover {
    cursor: pointer;
  }
`;

export const Thumnail = styled.img`
  width: 100%;
  height: 219px;
  object-position: center;
  object-fit: cover;
  border-radius: 15px;
  &: hover {
    filter: brightness(60%);
    /* transform: scale(1.05); */
    transition: 0.4s ease;
  }
`;
