import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { peopleOutline } from "ionicons/icons";

const ViewersBadge = styled.span`
  background: #ff634769;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
`;

const Icon = styled(IonIcon)`
  font-size: 24px;
  margin-right: 5px;
`;
type ViewerProps = {
  viewers: number;
};

const Viewers = ({ viewers }: ViewerProps) => {
  return (
    <ViewersBadge>
      <Icon icon={peopleOutline}></Icon>
      {viewers}
    </ViewersBadge>
  );
};

export default Viewers;