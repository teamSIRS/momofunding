import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { InfoCard, Text } from "./styles";

const Card = styled(InfoCard)`
    height: auto;
    padding: 30px 0;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const RewardTitle = styled.p`
    font-size:24px;
    font-weight: bold;
    margin: 3px;
    color: ${MomoColor};
`;

const Price = styled.p`
    font-size: 36px;
    margin: 3px;
    color: 424242;
`;

const RewardDetail = styled.p`
    margin: 3px;
    color: 7B7B7B;
`;

const Space = styled.div`
    height: 30px;
`;

/////이 위까지 RewardCard랑 똑같음
const Space1 = styled.div`
    height: 15px;
`;

const Amounts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: space-around;
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
        color: 7B7B7B;
    }
`;

const FundBtn = styled.button`
    width: 126px;
    height: 62px;
    border-radius: 15px;
    font-size: 18px;
`;

const CountUp = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${MomoColor};
    position: absolute;
    top: 7px;
    right: 13px;
`;

const CountDown = styled(CountUp)`
    top: 33px;
`;

function RewardCardSelected(){
    return(
        <Card>
            <Text>
                <RewardTitle>Gold 라벨</RewardTitle>
                <Price>78,000원</Price>
                <RewardDetail>어......개수만큼 출력이욤</RewardDetail>
            </Text>
            <Space/>
            <Text>
                <RewardDetail>214명이 선택</RewardDetail>
                <RewardDetail>예상 전달일 21.02.04</RewardDetail>
            </Text>
            <Space1/>
            <Amounts>
                <Amount>
                    <p>7</p>
                    <CountUp/>    
                    <CountDown/>                  
                </Amount>
                <FundBtn>후원하기</FundBtn>
            </Amounts>
        </Card>

    );
}

export default RewardCardSelected;