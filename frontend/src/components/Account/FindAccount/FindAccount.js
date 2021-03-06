import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import FindId from "./FindId";
import FindPw from "./FindPw";
import { useMatch } from "react-router";

const Tabs = styled.div`
  width: 500px;
`;
const Tab = styled.span`
  display: inline-block;
  width: 150px;
  text-align: center;
  font-size: 15px;
  margin: auto;
  margin-top: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "#6c6db5" : "#f2f2f2")};
`;

const FindAccountTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const FindAccountSeparateLine = styled.hr`
  width: 100%;
  margin: 0px auto;
  height: 15px;
  color: gray;
  &:not([size]) {
    height: 5px;
  }
`;

const FindAccountMain = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 900px;
`;

const styles = {
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
};

function FindAccount() {
  const idMatch = useMatch("/findAccount/findId");
  const pwMatch = useMatch("/findAccount/findPw");
  return (
    <div>
      <FindAccountMain>
        <FindAccountTitle>아이디, 비밀번호 찾기</FindAccountTitle>
        <Tabs>
          <Tab isActive={idMatch !== null}>
            <Link style={styles.link} to={`/findAccount/findId`}>
              아이디 찾기
            </Link>
          </Tab>
          <Tab isActive={pwMatch !== null}>
            <Link style={styles.link} to={`/findAccount/findPw`}>
              비밀번호 찾기
            </Link>
          </Tab>
        </Tabs>
        <FindAccountSeparateLine></FindAccountSeparateLine>
        <Routes>
          <Route path="/findId" element={<FindId />}></Route>
          <Route path="/findPw" element={<FindPw />}></Route>
        </Routes>
      </FindAccountMain>
    </div>
  );
}

export default FindAccount;
