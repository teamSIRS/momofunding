import styled from "styled-components";

const SurveySelectLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
`;
function SurveySelect() {
  return (
    <div>
      <SurveySelectLabel>
        [ 원하는 유형의 질문을 선택하고 등록해주세요. ]
      </SurveySelectLabel>
    </div>
  );
}
export default SurveySelect;
