import styled from 'styled-components';
import { InfoCard, Text } from "./styles";

const Card = styled(InfoCard)`
    height: 410px;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const Title = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

const Content = styled.p`
`;

function FundingCard(){
    return(
        <Card>
            <Text>  
                <Title>상품명</Title>
                <Content>Jola Mashisseu 2018</Content>
            </Text>
            <Text>  
                <Title>남은 기간</Title>
                <Content>~2/14 34일 남음</Content>
            </Text>
            <Text>  
                <Title>달성률</Title>
                <Content>1083% 달성</Content>
            </Text>
            <Text>  
                <Title>펀딩금액</Title>
                <Content>72,023,456원</Content>
            </Text>

        </Card>
    );
}

export default FundingCard;