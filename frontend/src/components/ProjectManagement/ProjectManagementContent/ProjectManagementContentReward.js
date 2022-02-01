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

const ProjectManagementContentRewardTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementContentTextarea = styled(ProjectManagementContentInput)`
  height: 150px;
`;

function ProjectManagementContentReward() {
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentRewardTitle>
          리워드 정보
        </ProjectManagementContentRewardTitle>
        <ProjectManagementContentBox>
          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>금액</ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              금액을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              리워드 명
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              리워드 명을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              상세 설명
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              상세 설명을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              옵션조건
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              옵션조건을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              style={{ height: 120 }}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              배송조건
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              배송조건을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentTextarea
              as={"textarea"}
              style={{ height: 120 }}
            ></ProjectManagementContentTextarea>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              제한 수량
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              제한 수량을 입력하세요.
            </ProjectManagementContentMemo>
            <ProjectManagementContentInput
              as={"input"}
            ></ProjectManagementContentInput>
          </ProjectManagementContentInputBox>

          <ProjectManagementContentInputBox>
            <ProjectManagementContentTitle>
              발송 시작일
            </ProjectManagementContentTitle>
            <ProjectManagementContentMemo>
              발송 시작일을 지정해주세요
            </ProjectManagementContentMemo>
            <ProjectManagementContentDate type="date"></ProjectManagementContentDate>
          </ProjectManagementContentInputBox>
        </ProjectManagementContentBox>
      </ProjectManagementMain>
    </div>
  );
}

export default ProjectManagementContentReward;
