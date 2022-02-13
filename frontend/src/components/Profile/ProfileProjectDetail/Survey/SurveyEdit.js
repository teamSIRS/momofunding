import axios from "axios";
import { removeCircleOutline } from "ionicons/icons";
import {
  Body,
  Container,
  SurveyTitle,
  SurveyResult,
  EditIcon,
} from "../Survey/Survey.styled";
import {baseUrl} from '../../../../App';
import setAuthorizationToken from "../../../../atoms";

function SurveyEdit({ survey, onRemove }) {

  return (
    <Body>
      <Container>
        <SurveyTitle>{survey.title}</SurveyTitle>
        <SurveyResult onClick={()=>{console.log('우앙~')}}>수정</SurveyResult>
      </Container>
      <EditIcon
        icon={removeCircleOutline}
        onClick={() => {onRemove(survey.id);}}
      ></EditIcon>
    </Body>
  );
}

export default SurveyEdit;
