import styled from 'styled-components';
import { InfoCard, CardTitle } from './styles';

const CreatorPic = styled.div`
    width:120px;
    height: 120px;
    background-image: url('https://pbs.twimg.com/profile_images/813380182291529728/mKDilml6_400x400.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 20px;
`;

const CreatorInfo = styled.div`
    text-align: center;
`;

const CreatorName = styled.p`
    font-size: 24px;
    margin: 5px;
`;

const SemiTitle = styled(CreatorName)`
    font-size: 18px;
`;

const Contact = styled(CreatorName)`
    font-size: 18px; 
`;

function CreatorCard(){
    return(
        <>
            <InfoCard>
                <CreatorPic/>
                <CreatorInfo>
                    <CreatorName>Hahm Desheuvoir</CreatorName>
                    <SemiTitle>당신의 파티를 더욱 특별하게</SemiTitle>
                    <Contact>hahhaah@naver.com</Contact>
                </CreatorInfo>
            </InfoCard>
        </>
    );
};

export default CreatorCard;