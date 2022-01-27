import CreatorCard from "./CreatorCard/CreatorCard";
import FundingCard from "./FundingCard/FundingCard";
import RewardCard from "./RewardCard/RewardCard";
import { Sidebar } from "./styles";

import Data from './data';
import {useState} from'react';

function ProjectSidebar(){
  let[rewards, setRewards] = useState(Data);

  return(
    <Sidebar>
      <CreatorCard />
      <FundingCard />

      {rewards.map((a, i) =>{
        return <RewardCard rewards={rewards[i]} i={i} key={i}/>
      })}
    </Sidebar>
  );
  
}

export default ProjectSidebar;