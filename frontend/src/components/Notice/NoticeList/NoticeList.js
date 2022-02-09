import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoticeListMain = styled.div`
  width: 90%;
  height: 90%;

  align-items: center;
  margin: auto;
  background-color: gray;
`;

const NoticeListContentBox = styled.div`
  list-style: none;
`;

const NoticeListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
`;

const NoticeListContentTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const NoticeListContentDate = styled(NoticeListContentTitle)``;

const NoticeListSeparateLine = styled.hr`
  /* width: 100%; */
  color: white;
`;

const NoticeListPage = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NoticeList() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  //////////////////////////////////////////////////////////////////////
  const baseUrl = "http://localhost:8080";
  const [data, setData] = useState([]);

  //////////////////////////////////////////////////////////////////////
  function getNoticeList() {
    const getNoticeList = async () => {
      await axios({
        url: `/notices?sort=na`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    getNoticeList();
  }
  useEffect(() => {
    getNoticeList();
  }, []);
  return (
    <div>
      <NoticeListMain>
        <NoticeListContentBox>
          {data.map((notice) => (
            <NoticeListContent key={notice.id}>
              <Link to={`/notices/${notice.id}`}>
                <NoticeListContentTitle>{notice.title}</NoticeListContentTitle>
              </Link>
              <NoticeListContentDate>2022.01.11</NoticeListContentDate>
            </NoticeListContent>
          ))}

          <NoticeListPage>
            <Pagination>{items}</Pagination>
          </NoticeListPage>
        </NoticeListContentBox>
        <NoticeListSeparateLine />
      </NoticeListMain>
    </div>
  );
}
export default NoticeList;
