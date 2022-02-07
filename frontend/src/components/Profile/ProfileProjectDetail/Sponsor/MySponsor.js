import styled from 'styled-components';

const Sponsor = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 130px;
    margin: 5px;
`;

const SponsorPic = styled.img`
    width: 80px;
    height: 80px;
    margin: auto 0;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
`;

const SponsorName = styled.p`
    font-size: 15px;
    margin: auto 0;
`;

function MySponsor({sponsor}){
    return(
        <Sponsor>
            <SponsorPic src={sponsor.pic} alt={sponsor.name}/>
            <SponsorName>{sponsor.name}</SponsorName>
        </Sponsor>
    );
}

export default MySponsor;