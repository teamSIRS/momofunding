import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { Container, Row } from "react-bootstrap";
import FundingBanner from "./FundingBanner";
import FundingContent from "./FundingContent/FundingContent";
import FundingSidebar from "./FundingSidebar";
import { Container, Body, Content, Side} from "../ProjectDetail/styles";

function Funding(){
  const [extra, setExtra] = useState(0);
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [shippingAddr, setShippingAddr] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  
  console.log(location.state.data);

  const getExtra = (extraAmount) => {
    setExtra(extraAmount);
  }
  const getName = (name) => {
    setName(name);
  }
  const getTell = (tell) => {
    setTell(tell);
  }
  const getShippingAddr = (shippingAddr) => {
    setShippingAddr(shippingAddr);
  }
  const getEmail = (email) => {
    setEmail(email);
  }

  console.log(extra);

  return (
    <Container>
      <FundingBanner />
      <Body>
        <Content>
          <FundingContent
            isDeliver = {location.state.data.reward.isDeliver}
            extra = {extra}
            name = {name}
            tell = {tell}
            shippingAddr = {shippingAddr}
            email = {email}
            getExtra = {getExtra}
            getName = {getName}
            getTell = {getTell}
            getShippingAddr = {getShippingAddr}
            getEmail = {getEmail}
          />
        </Content>
        <Side>
          <FundingSidebar/>
        </Side>
      </Body>
    </Container>
  );
};

export default Funding;
