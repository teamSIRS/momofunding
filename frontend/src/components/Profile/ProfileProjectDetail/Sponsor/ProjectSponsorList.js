import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../../../App";
import setAuthorizationToken from "../../../../atoms";
import * as xlsx from "xlsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Btn = styled.button`
  width: fit-content;
  padding: 1px 6px;
  position: absolute;
  right: 10px;
  top: -40px;
`;

function ProjectSponsorList() {
  const { id } = useParams();
  const [sponsors, setSponsors] = useState();

  const getSponsors = async () => {
    await axios
      .get(baseUrl + "/orders/projects/" + id, {
        headers: setAuthorizationToken(),
      })
      .then((res) => {
        setSponsors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSponsors();
  }, []);


    const excelDownload = (columns) => {
        if(sponsors.length===0) return;
        const ws = xlsx.utils.json_to_sheet(columns);
        const wb = xlsx.utils.book_new();

        ws["!cols"] = [];
        ws["!cols"][0] = { hidden: true };
        ws["!cols"][2] = { hidden: true };

      //수량 결제금액 이름 연락처 주소 배송요청사항 선택옵션
      [
        "주문id",
        "수량",
        "수량",
        "결제금액",
        "이름",
        "연락처",
        "주소",
        "배송요청사항",
        "선택옵션",
      ].forEach((x, idx) => {
        const cellAdd = xlsx.utils.encode_cell({ c: idx, r: 0 });
        ws[cellAdd].v = x;
      });

      xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
      xlsx.writeFile(wb, "상품 주문 정보.xlsx");
    };

  return (
    <Container>
      <Btn onClick={() => excelDownload(sponsors)}>엑셀 파일 다운로드</Btn>

      <table class="table">
          <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">이름</th>
              <th scope="col">전화번호</th>
              <th scope="col">선택 옵션</th>
              <th scope="col">수량</th>
              <th scope="col">결제 금액</th>
              </tr>
          </thead>
          <tbody>
              {
                  sponsors && sponsors.map((sponsor, i) =>{
                      return(
                          <tr>
                          <th>{i+1}</th>
                          <td>{sponsor.recipientName}</td>
                          <td>{sponsor.recipientTel}</td>
                          <td>{sponsor.rewardName}</td>
                          <td>{sponsor.quantity}</td>
                          <td>{sponsor.amount}</td>
                          </tr>
                      )
                  })
              }
          </tbody>
      </table>
    </Container>
  );
}

export default ProjectSponsorList;
