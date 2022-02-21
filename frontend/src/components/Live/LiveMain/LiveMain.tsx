import Chat from "./Chat";
import Viewers from "./Viewers";
import LiveFooter from "./LiveFooter";
import Survey from "./Surveys";
import { atom, useRecoilState } from "recoil";
import { viewrsCntState } from "../LiveAtoms";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../App";

const userApi = {
  surveySubmitted: false,
};

const api = {
  viewers: 3274, // numSockets
};

export const sidebarState = atom({
  key: "sidebarState",
  default: false,
});

export const authorizationState = atom({
  key: "authorizationState",
  default: true,
});

export const surveySubmitState = atom({
  key: "submitState",
  default: false,
});

export type ProjectProps = {
  projectId: number;
};

export const LiveMain = ({ projectId }: ProjectProps) => {
  const [show, setShow] = useRecoilState(sidebarState);
  const [viewrsCnt, _] = useRecoilState(viewrsCntState);
  const [project, setProject] = useState("");

  const onLoad = async () => {
    await axios({
      url: `/projects/${projectId}`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        setProject(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Chat show={show} project={project} />
      <Survey show={!show} />

      <Viewers viewers={viewrsCnt}></Viewers>

      <LiveFooter />
    </>
  );
};
