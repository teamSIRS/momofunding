import styled from "styled-components";

const NoticeListMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: auto;
  background-color: gray;
`;

const NoticeListContentBox = styled.ul`
  list-style: none;
`;

const NoticeListContent = styled.li`
  font-size: 20px;
  margin-top: 15px;
`;

const NoticeListSeparateLine = styled.hr`
  /* width: 100%; */
  color: white;
`;

function NoticeList() {
  return (
    <div>
      <NoticeListMain>
        <NoticeListContentBox>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
          <NoticeListContent>임시 공지사항 텍스트 입니다.</NoticeListContent>
        </NoticeListContentBox>
        <NoticeListSeparateLine />
      </NoticeListMain>
    </div>
  );
}
export default NoticeList;
