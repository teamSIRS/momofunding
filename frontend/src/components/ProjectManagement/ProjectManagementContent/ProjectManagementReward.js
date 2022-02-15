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

const ProjectManagementContentRewardSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding: 10px;
`;

const ProjectManagementContentRewardSelectMent = styled.h5`
`;

const ProjectManagementContentRewardSelectDesc = styled.p`
text-align: center;
`;

const ProjectManagementReward = () => {
  const rewardInit = {
    content: "",
    deliverStartDate: "",
    id: 0,
    isDeliver: false,
    limitedQuantity: 0,
    name: "",
    optionDescription: "",
    price: 0
  };
  const rewardNone = {
    content: "",
    deliverStartDate: "",
    id: -1,
    isDeliver: false,
    limitedQuantity: 0,
    name: "",
    optionDescription: "",
    price: 0
  };
  const location = useLocation();
  const projectId = location.state.projectId;
  const [rewards, setRewards] = useState([""]);
  const [reward, setReward] = useState(rewardInit);
  const [selected, setSelected] = useState(0);
  const initSelect = [
    {
      id: -1,
      name: "--선택안함"
    },
    {
      id: 0,
      name: "신규"
    }
  ]

  const setChangeData = () => {
    getRewards();
  }

  const getRewards = async() => {
    await axios
    .get(baseUrl + `/rewards/projects/` + projectId)
    .then((response) =>{
        setRewards([...initSelect, ...response.data]);
        setSelected(-1);
    })
    .catch((err) =>{
      console.log(err);
    })
  };

  const getReward = async() => {
    await axios
    .get(baseUrl + "/rewards/" + selected)
    .then((response) =>{
      setReward(response.data);
    })
    .catch((err) =>{
      console.log(err);
    })
  };

  useEffect(()=>{
    if(selected == -1) setReward(rewardNone);
    if(selected == 0) setReward(rewardInit);
    if(selected!=-1 && selected!=0) getReward();
  }, [selected])

  useEffect(()=>{
    getRewards();
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
      <ProjectManagementMain>
        <ProjectManagementContentRewardTitle>
          리워드 정보 등록
        </ProjectManagementContentRewardTitle>
        <ProjectManagementContentRewardSelect>
          <ProjectManagementContentRewardSelectMent>작성할 리워드를 선택해주세요!&nbsp;&nbsp;&nbsp;</ProjectManagementContentRewardSelectMent>
          <select onChange={e => {setSelected(e.target.value)}}>
          {
            rewards.map((reward, idx) => (
              <option value={reward.id} key={idx}>
                {reward.name}
              </option>
            ))
          }
          </select>
        </ProjectManagementContentRewardSelect>
        <ProjectManagementContentRewardSelectDesc>새 리워드 작성을 원하시면, '신규'를 선택해주세요</ProjectManagementContentRewardSelectDesc>
        <ProjectManagementContentReward
          reward = {reward}
          setChangeData = {setChangeData}
        >
        </ProjectManagementContentReward>
      </ProjectManagementMain>
    </div>
  );
};

export default ProjectManagementReward;