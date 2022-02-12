import styled from "styled-components";
import { useRecoilState } from "recoil";
import { rewardOrderState } from "./rewardOrderAtoms";
const Info = styled.span`
  font-size: 16px;
  padding-left: 10px;
`;

function PaySuccess() {
  const [rewardOrderDto, setRewardOrder] = useRecoilState(rewardOrderState);
  console.log(rewardOrderDto);

  return (
    <>
      <Info>결제 완료 되었습니다.</Info>
      {rewardOrderDto.recipientName}
    </>
  );
}

export default PaySuccess;
