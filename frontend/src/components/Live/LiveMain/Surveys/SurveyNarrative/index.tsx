import {
  TextArea,
  TextAreaWrapper,
} from "../../../../ProjectDetail/ProjectContent/ProjectCommunity/PjCommunityQnA/PjCommunityInput/styles";
import { SurveyFormWrapper, SurveyText, SurveyTextWrapper } from "../styles";

const SurveyNarrative = () => (
  <SurveyFormWrapper>
    <SurveyTextWrapper>
      <SurveyText placeholder="(선택사항) 여러분의 소중한 의견을 전해주세요"></SurveyText>
    </SurveyTextWrapper>
  </SurveyFormWrapper>
);

export default SurveyNarrative;
