import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { Info } from '../../Account/FindAccount/styles';

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 347px;
    height: 307px;
    border-radius: 20px;
    box-shadow: 4px 4px 20px 0px ${MomoColor};
    margin: 20px;
`;

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

function Cards(){
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

export default Cards;