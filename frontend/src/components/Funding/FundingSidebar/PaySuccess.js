import styled from "styled-components";
import { baseUrlNoApi } from "../../../App";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Content = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

function PaySuccess() {
  const { id } = useParams();
  console.log(id);

  setTimeout(() => {
    window.close();
  }, 7000);
  const redirect = () => {
    Swal.fire({
      title: "결제 완료",
      icon: "success",
      showConfirmButton: false,
      timer: 1200,
    });
    window.opener.parent.location.href = baseUrlNoApi + "/projects/" + id;
  };
  redirect();
  return (
    <>
      <Content>결제가 완료 되었습니다. 창이 자동으로 닫힙니다...</Content>
    </>
  );
}

export default PaySuccess;
