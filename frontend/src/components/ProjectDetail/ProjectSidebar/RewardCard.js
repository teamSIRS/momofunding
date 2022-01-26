import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { InfoCard, Text } from "./styles";

const Card = styled(InfoCard)`
    height: auto;
    padding: 20px 0;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const RewardTitle = styled.p`
    font-size:24px;
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


function RewardCard(){
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
        </Card>

    );
}

export default RewardCard;