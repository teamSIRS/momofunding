import { MomoProgress } from "../BannerProgress/styles";
import {
  ContribContent,
  ContribTitleStrong,
  ContribWrapper,
  Days
} from "./styles";
import {comma} from '../../../../atoms';

type BannerContribStatusProps = {
  to: string;
  total: number;
  contribRate: number;
  goal: number;
};

export const BannerContribStatus = ({
  // from,
  to,
  total,
  contribRate,
}: BannerContribStatusProps) => {
  const today = new Date();
  const endDay = new Date(to);
  const daysLeft = Math.ceil(
    (endDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <ContribWrapper>
        <div>
          <ContribContent>{contribRate}% 달성 </ContribContent>
          <ContribTitleStrong> {comma(total)}원</ContribTitleStrong>
        </div>
        <Days>
          <ContribContent>~{endDay.getMonth()+1}/{endDay.getDate()} </ContribContent>
          <ContribTitleStrong>&nbsp;{daysLeft}일 남음</ContribTitleStrong>
        </Days>
        <MomoProgress
          // animated
          border-radius="15px"
          width="100%"
          bottom="0px"
          now={contribRate}
        ></MomoProgress>
      </ContribWrapper>
    </div>
  );
};

