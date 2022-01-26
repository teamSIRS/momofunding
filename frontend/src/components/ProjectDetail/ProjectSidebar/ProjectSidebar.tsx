import CreatorCard from "./CreatorCard/CreatorCard";
import FundingCard from "./FundingCard/FundingCard";
import RewardCard from "./RewardCard/RewardCard";
import { Sidebar } from "./styles";

export const ProjectSidebar = () => (
  <Sidebar>
    <CreatorCard />
    <FundingCard />
    <RewardCard />
  </Sidebar>
);
