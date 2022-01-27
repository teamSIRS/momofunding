import styled from 'styled-components';
import { MomoColor, MomoStrongColor } from '../../../shared/global';
import { InfoCard, Text } from './CreatorCard/styles';

const Card = styled(InfoCard)`
    height: 440px;
    margin: 30px 10px;
`;

const Top = styled.div`
    display: flex;
`;

const Title = styled.p`
    font-size: 18px;
    line-height: 36px;
`;

const Space = styled.div`
    width: 55px;
`;

const TotalPrice = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: ${MomoColor};
`;

const Check = styled.label`

`;

const Input = styled.input`
    width: 14px;
    height: 14px;
`;

const Info = styled.span`
    font-size: 16px;
    padding-left: 10px;
`;

const LongText = styled.p`
    padding: 5px 34px;
    color: #7B7B7B;
`;

const FundingBtn = styled.button`
    width: 280px;
    height: 50px;
    border-radius: 15px;
    :hover{
        background-color: ${MomoStrongColor};
    }
`;

function PayCard(){
    return(
        <Card>
            <Top>
                <Title>최종 후원 금액</Title> 
                <Space/> 
                <TotalPrice>264,000원</TotalPrice>
            </Top>
            <Check>
                <Input type="checkbox" />
                <Info>아래 내용에 동의합니다</Info>
            </Check>
            <LongText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad rem, quia beatae odio eaque, adipisci doloribus, similique sapiente officiis pariatur consequatur repudiandae temporibus sit quo tempora placeat eius aut tempore id quas magnam. Excepturi non est ipsum iure. Illum quos possimus numquam perspiciatis accusamus earum quam rem sed in.
            </LongText>
            <FundingBtn>후원하기</FundingBtn>
        </Card>
    );
}


export default PayCard;