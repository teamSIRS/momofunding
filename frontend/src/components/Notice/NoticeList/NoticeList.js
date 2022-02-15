import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { baseUrl } from "../../../App";
import { Container, Row, Col } from "react-bootstrap";

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
  justify-content: center;
  align-items: center;
  /* margin: 0px 20px; */
  margin: auto;
  /* border-top: solid 1px #000110; */
  border-bottom: solid 1px gray;
`;

const NoticeListContentTitle = styled.div`
  font-size: 20px;
  line-height: 50px;
  /* margin-top: 20px; */
  text-align: center;
  color: black;
`;

const NoticeListContentHead = styled(NoticeListContent)`
  border-bottom: solid 2px #000110;
  background-color: #f7f7f7;
`;
const NoticeListNumber = styled(NoticeListContentTitle)``;

const NoticeListContentWriter = styled(NoticeListContentTitle)``;

const NoticeListContentDate = styled(NoticeListContentTitle)``;
const NoticeListContentCount = styled(NoticeListContentTitle)``;

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

const CustomCol = styled(Col)`
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
        url: `/notices?sort=nd`,
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
      {/* <NoticeListMain> */}
      <NoticeListContentBox>
        <Container>
          <Row>
            <NoticeListContentHead>
              <CustomCol sm={1}>
                <NoticeListNumber>글 번호</NoticeListNumber>
              </CustomCol>
              <CustomCol sm={6}>
                <NoticeListContentTitle>글 제목</NoticeListContentTitle>
              </CustomCol>
              <CustomCol sm={2}>
                <NoticeListContentWriter>작성자</NoticeListContentWriter>
              </CustomCol>
              <CustomCol sm={2}>
                <NoticeListContentDate>작성일자</NoticeListContentDate>
              </CustomCol>
              <CustomCol sm={1}>
                <NoticeListContentCount>조회수</NoticeListContentCount>
              </CustomCol>
              <hr />
            </NoticeListContentHead>
            {data
              ? data.map((notice, index) => (
                  <NoticeListContent key={notice.id}>
                    <CustomCol sm={1}>
                      <NoticeListNumber>{index + 1}</NoticeListNumber>
                    </CustomCol>
                    <CustomCol sm={6}>
                      <Link to={`/notices/${notice.id}`}>
                        <NoticeListContentTitle>
                          {notice.title}
                        </NoticeListContentTitle>
                      </Link>
                    </CustomCol>
                    <CustomCol sm={2}>
                      <NoticeListContentWriter>관리자</NoticeListContentWriter>
                    </CustomCol>
                    <CustomCol sm={2}>
                      <NoticeListContentDate>
                        {moment(notice.registerTime).format("YYYY-MM-DD")}
                      </NoticeListContentDate>
                    </CustomCol>
                    <CustomCol sm={1}>
                      <NoticeListContentCount>
                        {notice.viewerCount}
                      </NoticeListContentCount>
                    </CustomCol>
                  </NoticeListContent>
                ))
              : null}

            <NoticeListPage>
              <Pagination>{items}</Pagination>
            </NoticeListPage>
          </Row>
        </Container>
      </NoticeListContentBox>
      <NoticeListSeparateLine />
      {/* </NoticeListMain> */}
    </div>
  );
}
export default NoticeList;
