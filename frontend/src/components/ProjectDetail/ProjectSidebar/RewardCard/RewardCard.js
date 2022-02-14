import styled from "styled-components";
import { MomoColor, MomoStrongColor } from "../../../../shared/global";
import { InfoCard, Text } from "../CreatorCard/styles";
import { useState } from 'react';
import { IonIcon } from "@ionic/react";
import { caretUp, caretDown } from "ionicons/icons";
import { comma } from '../../../../atoms';
import { useNavigate } from "react-router-dom";

const Card = styled(InfoCard)`
  height: auto;
  padding: 20px 0;
  align-items: flex-start;
  justify-content: space-evenly;
  :hover{
    margin:23px;
  }
  `;

const RewardTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-right: 20px;
  /* margin: auto 0; */
  color: ${MomoColor};
  `;

const Price = styled.p`
  font-size: 36px;
  margin: 3px;
  color: #424242;
  `;

const RewardDetail = styled.p`
  margin: 3px;
  color: #7b7b7b;
  `;

const Space = styled.div`
  height: 30px;
  `;

// RewardSelected
const Space1 = styled.div`
    height: 15px;
    `;

const Amounts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: space-around;
    padding: 10px;
    margin: auto;
    `;

const Amount = styled.div`
    width: 164px;
    height: 61px;
    border-radius: 10px;
    border: 1px solid ${MomoColor};
    position: relative;
    p{
      width: 70%;
      text-align: right;
      line-height: 61px;
      font-size: 24px;
      color: #7B7B7B;
    }
    `;

const FundBtn = styled.button`
    width: 126px;
    height: 62px;
    border-radius: 15px;
    font-size: 18px;
    :hover{
      background-color: ${MomoStrongColor};
    }
    `;

const CountUp = styled(IonIcon)`
    width: 30px;
    height: 30px;
    color: ${MomoColor};
    position: absolute;
    top: 4px;
    right: 13px;
`;

const CountDown = styled(CountUp)`
    top: 24px;
`;

const Space2 = styled.div`
  width: 10px;
`;


function RewardCard(props) {
  const [amount, setAmount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const deliveryDate = new Date(props.rewards.deliverStartDate);

  function countUp(){
      setAmount(amount+1);
  }
  function countDown(){
      if(amount > 0){
          setAmount(amount-1);
      }
  }

  const navigate = useNavigate();

  const goToPay = () => {
    const data = {
      reward: props.rewards,
      amount: amount
    };
    navigate(`/funding`, { state: {data: data} });
    window.scrollTo(0, 0);
  }

  return (
    <Card>
      <div onClick={() => {setClicked(!clicked)}}>
        <Text>
          <RewardTitle>{ props.rewards.name }</RewardTitle>
          <Price>{ comma(props.rewards.price) }원</Price>
          {/* <p>
            {
              String(props.rewards.content).split('. ').map(line => {
                return (<span>{line}<br/></span>)
              })
            }
          </p> */}
          <p>{ props.rewards.content }</p>
        </Text>
        <Space />
        <Text>
          <RewardDetail>{ props.rewards.limitedQuantity }개 제한</RewardDetail>
          <RewardDetail>예상 전달일 { deliveryDate.toLocaleDateString() }</RewardDetail>
        </Text>
      </div>

      {
        clicked
        ? (
          <Amounts>
            <Space1/>
            <Amount>
                <p>{amount}</p>
                <CountUp icon={caretUp} onClick={countUp}/>    
                <CountDown icon={caretDown} onClick={countDown}/>                  
            </Amount>
            <Space2/>
            <FundBtn onClick={() => {goToPay()}}>후원하기</FundBtn>
          </Amounts>
        )
        : null
      }
    </Card>
  );
}

export default RewardCard;
