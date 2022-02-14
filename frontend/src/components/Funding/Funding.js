import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { Container, Row } from "react-bootstrap";
import FundingBanner from "./FundingBanner";
import FundingContent from "./FundingContent";
import FundingSidebar from "./FundingSidebar";
import { Container, Body, Content, Side} from "../ProjectDetail/styles";

function Funding(){
  const location = useLocation();
  const [total, setTotal] = useState(location.state.data.reward.price*location.state.data.amount);
  const [extra, setExtra] = useState(0);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [shippingAddr, setShippingAddr] = useState("");
  const [request, setRequest] = useState("");
  const [email, setEmail] = useState("");
  const [paySort, setPaySort] = useState("");

  const getExtra = (extraAmount) => {
    setExtra(extraAmount);
  }
  const getName = (name) => {
    setName(name);
  }
  const getTel = (tel) => {
    setTel(tel);
  }
  const getShippingAddr = (shippingAddr) => {
    setShippingAddr(shippingAddr);
  }
  const getRequest = (request) => {
    setRequest(request);
  }
  const getEmail = (email) => {
    setEmail(email);
  }
  const getPaySort = (paySort) => {
    setPaySort(paySort);
  }

  return (
    <Container>
      <FundingBanner
        reward = {location.state.data.reward}
        project = {location.state.data.project}
        amount = {total}
      />
      <Body>
        <Content>
          <FundingContent
            isDeliver = {location.state.data.reward.isDeliver}
            extra = {extra}
            name = {name}
            tel = {tel}
            shippingAddr = {shippingAddr}
            email = {email}
            getExtra = {getExtra}
            getName = {getName}
            getTel = {getTel}
            getShippingAddr = {getShippingAddr}
            getRequest = {getRequest}
            getEmail = {getEmail}
            getPaySort = {getPaySort}
          />
        </Content>
        <Side>
          <FundingSidebar
            reward = {location.state.data.reward}
            amount = {location.state.data.amount}
            projectId = {location.state.data.project.id}
            total = {Number(total)+Number(extra)}
            name = {name}
            tel = {tel}
            shippingAddr = {shippingAddr}
            request = {request}
            email = {email}
            paySort = {paySort}
          />
        </Side>
      </Body>
    </Container>
  );
};

export default Funding;
