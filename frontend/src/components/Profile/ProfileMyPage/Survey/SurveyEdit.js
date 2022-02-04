import { removeCircleOutline } from 'ionicons/icons';
import { Body, Container, SurveyTitle, SurveyResult, EditIcon } from '../Survey/Survey.styled';



function SurveyEdit({survey, onRemove}){

    return(
        <Body>
            <Container>
                <SurveyTitle>{survey.title}</SurveyTitle>
                <SurveyResult>수정</SurveyResult>
            </Container>
            <EditIcon icon={removeCircleOutline} onClick={() => onRemove(survey.id)}></EditIcon>
        </Body>
    );

}

export default SurveyEdit;