import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { baseUrl } from "../../../App";
import ProjectManagementContentReward from './ProjectManagementContentReward';


const ProjectManagementMain = styled.div`
  width: 100%;
  min-height: 800px;
`;

const ProjectManagementContentRewardTitle = styled.h3`
  text-align: center;
`;

const ProjectManagementReward = () => {
  const location = useLocation();
  const projectId = location.state.projectId;
  const [rewards, setRewards] = useState([""]);
  const [reward, setReward] = useState("");
  const [selected, setSelected] = useState("없음");

  const rewardSample = {
    content: "",
    deliverStartDate: "",
    id: 0,
    isDeliver: false,
    limitedQuantity: 0,
    name: "",
    optionDescription: "",
    price: 0
  };

  const getRewards = async() => {
    await axios
    .get(baseUrl + "/rewards/projects/" + projectId)
    .then((res) =>{
      setRewards([...res.data]);
      if(rewards.length === 0) {
        setSelected("없음");
        setReward(rewardSample);
      } else setReward(res.data[0]);
    })
    .catch((err) =>{
      console.log(err);
    })
  };

  const getReward = async() => {
    await axios({
    })
    .get(baseUrl + "/rewards/" + selected)
    .then((res) =>{
      console.log(res.data);
      setReward(res.data);

    })
    .catch((err) =>{
      console.log(err);
    })
  };

  useEffect(()=>{
    console.log(selected);
    if(selected!=="없음") getReward();
  }, [selected])

  useEffect(() => {
    getRewards();
  }, [])
  
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentRewardTitle>
          리워드 정보 등록
        </ProjectManagementContentRewardTitle>
        <select onChange={e => {setSelected(e.target.value)}}>
          {
            rewards.map((reward, idx) => (
              <option value={reward.id} key={idx}>
                {reward.name}
              </option>
            ))
          }
        </select>
        <ProjectManagementContentReward
          reward = {reward}
        ></ProjectManagementContentReward>
      </ProjectManagementMain>
    </div>
  );
};

export default ProjectManagementReward;