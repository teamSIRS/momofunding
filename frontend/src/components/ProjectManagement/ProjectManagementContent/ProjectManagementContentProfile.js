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

const ProjectManagementContentProfileTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 150px;
`;

function ProjectManagementContentProfile() {
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentProfileTitle>
          창작자 프로필 등록
        </ProjectManagementContentProfileTitle>
        <ProjectManagementContentBox>
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              개설자 이름
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자님의 이름을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              자기소개
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자님을 소개해주세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              이메일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자님의 이메일을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              placeholder="example@email.com"
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              대표번호
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자님의 대표번호를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
              placeholder="- 없이 입력"
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              계좌정보
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              개설자님의 계좌정보를 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>
        </ProjectManagementContentBox>
      </ProjectManagementMain>
    </div>
  );
}
export default ProjectManagementContentProfile;
