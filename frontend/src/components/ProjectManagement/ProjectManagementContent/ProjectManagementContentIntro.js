import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const ProjectManagementMain = styled.div`
  width: 100%;
  min-height: 800px;
`;

const ProjectManagementContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 50px;
`;

const ProjectManagementContentInputBox = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;
const ProjectManagementContentTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ProjectManagementContentMemo = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;
const ProjectManagementContentInput = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border-color: transparent;
  padding: 5px;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;
const ProjectManagementContentDate = styled.input``;

const ProjectManagementContentImgBox = styled.div`
  height: 300px;
`;

const ProjectManagementContentImg = styled.img`
  display: block;
  width: 80%;
  height: 100%;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 20px;
`;

const ProjectManagementContentImgLabel = styled.label`
  display: block;
  width: 70px;
  text-align: center;
  background-color: #6667ab;
  color: white;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  float: right;
`;
const ProjectManagementContentImgInput = styled.input`
  display: none;
`;

const ProjectManagementContentIntroTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;
function ProjectManagementContentIntro() {
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentIntroTitle>
          프로젝트 정보 등록
        </ProjectManagementContentIntroTitle>
        <ProjectManagementContentBox>
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 제목
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 제목을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              카테고리
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트에 알맞는 카테고리를 골라주세요.
            </ProjectManagementContentMemo>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                선택하세요
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">음식</Dropdown.Item>
                <Dropdown.Item href="#/action-2">화장품</Dropdown.Item>
                <Dropdown.Item href="#/action-3">캠핑</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              펀딩 목표 금액
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 펀딩 목표 금액을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              대표이미지
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 대표사진을 업로드하세요. (가로 1000px이상의
              JPG, PNG, BMP 이미지 업로드 가능)
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput></ProjectManagementContentImgInput>
            <ProjectManagementContentImgLabel>
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src="/photo/funding_small.jpg"
                alt="example-image"
              ></ProjectManagementContentImg>
            </ProjectManagementContentImgBox>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              소개사진
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 소개사진을 업로드하세요. (가로 1000px이상의
              JPG, PNG, BMP 이미지 업로드 가능)
            </ProjectManagementContentMemo>
            <ProjectManagementContentImgInput></ProjectManagementContentImgInput>
            <ProjectManagementContentImgLabel>
              파일
            </ProjectManagementContentImgLabel>
            <ProjectManagementContentImgBox>
              <ProjectManagementContentImg
                src="/photo/funding_example.png"
                alt="example-image"
              ></ProjectManagementContentImg>
            </ProjectManagementContentImgBox>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 요약
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              프로젝트를 요약하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 내용
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              프로젝트 내용을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              프로젝트 종료일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              창작자님의 프로젝트 종료일을 지정하세요
            </ProjectManagementContentMemo>
            <ProjectManagementContentDate type="date"></ProjectManagementContentDate>
          </ProjectManagementContentInputBox>
        </ProjectManagementContentBox>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementContentIntro;
