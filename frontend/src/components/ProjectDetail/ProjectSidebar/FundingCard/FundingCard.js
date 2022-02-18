import styled from "styled-components";
import { InfoCard, Text, CardTitle } from "../CreatorCard/styles";
import {comma} from '../../../../atoms';

const Card = styled(InfoCard)`
  height: 410px;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Content = styled.p``;

function FundingCard({project}) {
  const contriRate = Math.round((project.currentAmount / project.fundingGoal) * 1000) / 10; 
  const today = new Date();
  const endDate = new Date(project.expirationDate);
  const leftDays = Math.ceil((endDate.getTime() - today.getTime())/(1000*60*60*24));

  return (
    <>
      <Card>
        <Text>
          <Title>상품</Title>
          <Content>{project.summary}</Content>
        </Text>
        <Text>
          <Title>남은 기간</Title>
          <Content>~{endDate.getMonth()+1}/{endDate.getDate()} {leftDays}일 남음</Content>
        </Text>
        <Text>
          <Title>달성률</Title>
          <Content>{comma(contriRate)}% 달성</Content>
        </Text>
        <Text>
          <Title>펀딩금액</Title>
          <Content>{comma(project.currentAmount)}원</Content>
        </Text>
      </Card>
    </>
  );
}

export default FundingCard;
