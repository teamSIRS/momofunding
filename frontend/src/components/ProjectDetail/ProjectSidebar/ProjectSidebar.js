import CreatorCard from "./CreatorCard/CreatorCard";
import FundingCard from "./FundingCard/FundingCard";
import RewardCard from "./RewardCard/RewardCard";
import { Sidebar } from "./styles";

import Data from "./data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../App";

const ProjectSidebar = ({ project }) => {
  const { id } = useParams();
  const [creator, setCreator] = useState("");
  // const [rewards, setRewards] = useState(Data);
  const [rewards, setRewards] = useState([{ id: 0, title: "test" }]);
  const [isReward, setIsReward] = useState(false);

  const getCreator = async () => {
    await axios
      .get(baseUrl + "/creators/" + id)
      .then((res) => {
        setCreator(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReward = async () => {
    await axios
      .get(baseUrl + "/rewards/projects/" + id)
      .then((res) => {
        setRewards([...res.data]);
        if (rewards.length === 0) setIsReward(false);
        else setIsReward(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCreator();
  }, []);

  useEffect(() => {
    getReward();
  }, [isReward]);

  return (
    <Sidebar className="col-4">
      <CreatorCard creator={creator} />
      <FundingCard project={project} />

      {isReward
        ? rewards.map((a, i) => {
            return (
              <RewardCard
                rewards={rewards[i]}
                i={i}
                key={i}
                project={project}
              />
            );
          })
        : null}
    </Sidebar>
  );
};

export default ProjectSidebar;
