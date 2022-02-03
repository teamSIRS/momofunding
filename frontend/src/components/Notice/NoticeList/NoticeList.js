import { Pagination } from "react-bootstrap";
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
  return (
    <div>
      <NoticeListMain>
        <NoticeListContentBox>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>
          <NoticeListContent>
            <NoticeListContentTitle>
              임시 공지사항 텍스트 입니다
            </NoticeListContentTitle>
            <NoticeListContentDate>2022.01.11</NoticeListContentDate>
          </NoticeListContent>

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
