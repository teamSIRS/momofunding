import styled from 'styled-components';
import { MomoColor } from '../../../../shared/global';

export const Btn = styled.button`
  width: 217px;
  height: 75px;
  border-radius: 15px;
  font-size: 24px;
  color: white;
`;

export const GotoLiveBtn = styled(Btn)`
  background-color: red;
`;

export const NotLiveBtn = styled(Btn)`
  background-color: #C4C4C4;
`;

export const ShareBtn = styled.div`
  align-items:center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 5px solid ${MomoColor};
  border-radius: 50px;
  padding: 10px;

  img{
    display: block;
    padding: 2px 2px 0 0;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

  /* 이렇게 써주시면 됩니당.. !
      <ShareBtn>
        <img src="/icons/share.png"/>
      </ShareBtn>
  */
`;
