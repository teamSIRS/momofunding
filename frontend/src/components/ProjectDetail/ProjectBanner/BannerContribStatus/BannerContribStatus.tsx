import { MomoColor } from "../../../../shared/global";
import { MomoProgress } from "../BannerProgress/styles";
import {
  ContribTitle,
  ContribContent,
  ContribTitleStrong,
  ContribWrapper,
} from "./styles";

type BannerContribStatusProps = {
  from: string;
  to: string;
  total: number;
  contribRate: number;
};

export const BannerContribStatus = ({
  from,
  to,
  total,
  contribRate,
}: BannerContribStatusProps) => {
  const startDay = new Date(from);
  const today = new Date();
  const endDay = new Date(to);
  const totalDays = Math.ceil(
    (endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.ceil(
    (endDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(totalDays);
  return (
    <div>
      <ContribWrapper>
        <div>
          <ContribContent>{contribRate}% 달성 </ContribContent>
          <ContribTitleStrong>{total}</ContribTitleStrong>
          <ContribTitle>원</ContribTitle>
        </div>
        <ContribContent>~ {to} </ContribContent>
        <ContribTitleStrong>{daysLeft}일 남음</ContribTitleStrong>
        <MomoProgress
          animated
          border-radius="15px"
          width="100%"
          bottom="0px"
          now={((totalDays - daysLeft) / totalDays) * 100}
        ></MomoProgress>
      </ContribWrapper>
    </div>
  );
};
