import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../App";
import Swal from "sweetalert2";

const Content = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

function PayCancel() {
  Swal.fire({
    title: "결제가 취소되었습니다.",
    icon: "error",
    showConfirmButton: false,
    timer: 1200,
  });
  const { token } = useParams();
  console.log(token);
  const deleteRewardOrder = async () => {
    // axios 요청
    await axios({
      url: "/orders/fail",
      method: "DELETE",
      data: {
        // 보낼 데이터 key: value 형태로
        token: token,
      },
      baseURL: baseUrl,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // .catch는 axios 요청 실패시 작업
        console.log(error); // error 메세지 확인
      });
  };
  deleteRewardOrder();
  setTimeout(() => {
    window.close();
  }, 7000);

  return (
    <>
      <Content>결제가 취소 되었습니다. 창이 자동으로 닫힙니다...</Content>
    </>
  );
}

export default PayCancel;
