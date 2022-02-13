import { MomoProgress } from "../BannerProgress/styles";
import {
  ContribTitle,
  ContribContent,
  ContribTitleStrong,
  ContribWrapper,
  Days
} from "./styles";
import {comma} from '../../../../atoms';

type BannerContribStatusProps = {
  // from: string;
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
  goal,
}: BannerContribStatusProps) => {
  // const startDay = new Date(from);
  const today = new Date();
  const endDay = new Date(to);
  // const totalDays = Math.ceil(
  //   (endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)
  // );
  const daysLeft = Math.ceil(
    (endDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  // console.log(totalDays);

  return (
    <div>
      <ContribWrapper>
        <div>
          <ContribContent>{contribRate}% 달성 </ContribContent>
          <ContribTitleStrong> {comma(total)}원</ContribTitleStrong>
          {/* <ContribTitle>원</ContribTitle> */}
          {/* <ContribTitle>/{comma(goal)}원</ContribTitle> */}
          {/* <ContribTitle><ContribTitleStrong>{total}</ContribTitleStrong>원</ContribTitle> */}
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
          // now={((totalDays - daysLeft) / totalDays) * 100}
          // 주석 처리된 now는 ... 날짜 진행률, 수정한건 펀딩목표달성률
        ></MomoProgress>
      </ContribWrapper>
    </div>
  );
};

