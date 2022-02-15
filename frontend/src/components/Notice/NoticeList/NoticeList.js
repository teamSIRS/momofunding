import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { baseUrl } from "../../../App";

const NoticeListMain = styled.div`
  width: 90%;
  height: 90%;

  align-items: center;
  margin: auto;
  background-color: #fffffe;
`;

const NoticeListContentBox = styled.div`
  list-style: none;
`;

const NoticeListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  border-top: solid 1px #000110;
  border-bottom: solid 1px #000110;
`;

const NoticeListContentTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
  color: black;
`;

const NoticeListNumber = styled(NoticeListContentTitle)``;

const NoticeListContentWriter = styled(NoticeListContentTitle)``;

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
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  //////////////////////////////////////////////////////////////////////
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
          {data
            ? data.map((notice, index) => (
                <NoticeListContent key={notice.id}>
                  <NoticeListNumber>{index + 1}</NoticeListNumber>
                  <Link to={`/notices/${notice.id}`}>
                    <NoticeListContentTitle>
                      {notice.title}
                    </NoticeListContentTitle>
                  </Link>
                  <NoticeListContentWriter>관리자</NoticeListContentWriter>
                  <NoticeListContentDate>
                    {moment(notice.registerTime).format("YYYY-MM-DD HH:mm:ss")}
                  </NoticeListContentDate>
                </NoticeListContent>
              ))
            : null}

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
