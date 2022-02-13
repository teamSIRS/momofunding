import styled from "styled-components";

const Content = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

function PaySuccess() {
  setTimeout(() => {
    window.close();
  }, 10000);

  return (
    <>
      <Content>결제가 완료 되었습니다. 창이 자동으로 닫힙니다...</Content>
    </>
  );
}

export default PaySuccess;
