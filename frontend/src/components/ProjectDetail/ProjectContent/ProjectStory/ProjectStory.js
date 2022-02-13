import axios from 'axios';

export const ProjectStory = () => {
  const getApi = async() =>{
    await axios.get('http://localhost:8080/')
  }

  return <h1>스토리</h1>;
};
