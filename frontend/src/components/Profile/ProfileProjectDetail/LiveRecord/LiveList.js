import styled from "styled-components";
import { Table } from "react-bootstrap";

const MyTable = styled(Table)`
  text-align: center;
  background-color: #f9f9f9;
`;

function LiveList(lives) {
  const setList = () => {
    let list = [];
    if (lives.lives.length === 0) {
      list.push(
        <tr key={list}>
          <td>-</td>
          <td>라이브 기록 없음</td>
        </tr>
      );
    } else {
      for (let i = 0; i < lives.lives.length; i++) {
        list.push(
          <tr key={i}>
            <td>{lives.lives[i].registerDate.slice(0, 10)}</td>
            <td>{lives.lives[i].title}</td>
          </tr>
        );
      }
    }
    return list;
  };

  return (
    <MyTable className="table">
      <thead>
        <tr>
          <th width="20%">날짜</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{setList()}</tbody>
    </MyTable>
  );
}

export default LiveList;
