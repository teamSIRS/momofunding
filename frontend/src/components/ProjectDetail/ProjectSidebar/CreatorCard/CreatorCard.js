import styled from "styled-components";
import { InfoCard, CardTitle } from "./styles";

const CreatorPic = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
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
  padding: 0 30px;
  font-size: 18px;
`;

const Contact = styled(CreatorName)`
  font-size: 18px;
`;

function CreatorCard({creator}) {
  return (
    <>
      <CardTitle>상품 정보</CardTitle>
      <InfoCard>
        <CreatorPic src={creator.creatorImageUrl}/>
        <CreatorInfo>
          <CreatorName>{creator.creatorName}</CreatorName>
          <SemiTitle>
              {
                String(creator.creatorContent).split('. ').map(line => {
                  return (<span>{line}<br/></span>)
                })
              }
              {/* {creator.creatorContent} */}
          </SemiTitle>
          <Contact>{creator.email}</Contact>
        </CreatorInfo>
      </InfoCard>
    </>
  );
}

export default CreatorCard;
