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

const ProjectManagementContentStoryTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 120px;
`;

function ProjectManagementContentStory() {
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentStoryTitle>
          프로젝트 스토리
        </ProjectManagementContentStoryTitle>
        <ProjectManagementContentBox>
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              소개사진
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자 님의 프로젝트 소개사진을 업로드하세요. (가로 1000px이상의
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
              개설자가 얻는 이득
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자가 얻는 이득을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              후원자가 얻는 이득
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자가 얻는 이득을 입력하세요.{" "}
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              차별점
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              다른 상품들과의 차별점을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              리스크 / 과제
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              해당 프로젝트의 리스크와 과제를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>기타</ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              기타 쓰고 싶은 말을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>
        </ProjectManagementContentBox>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementContentStory;
