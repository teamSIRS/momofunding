import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../../App";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 10px;
  text-align: center;
`;
const StoryImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

const StoryImageBox = styled.div`
  margin-bottom: 50px;
`;

export const ProjectStory = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [subImgUrl, setSubImgUrl] = useState("");

  const getApi = async () => {
    await axios
      .get(baseUrl + "/projects/" + id)
      .then((res) => {
        setSubImgUrl(res.data.subImageUrl);
        setContent(res.data.projectContent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      <StoryImageBox>
        <StoryImage src={subImgUrl} />
      </StoryImageBox>

      {content.split("\n").map((line) => {
        return (
          <span key={line}>
            {line}
            <br />
          </span>
        );
      })}
    </Container>
  );
};
