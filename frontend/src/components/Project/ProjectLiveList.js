import axios from 'axios';
import { useEffect, useState } from "react";
import HomeBanners from "../Home/HomeBanners";
import { Col, Container, Row } from 'react-bootstrap';
import ProjectLiveCard from './ProjectLiveCard';
import { ListNav, Category, Search, Bar, ListFilter, ListFilterSelected, ListCenter } from './Project.styled';

function ProjectLiveList(){
    const baseUrl = "http://localhost:8080";
  const [isPop, setIsPop] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [search, setSearch] = useState("");

  const showDateList = async() => { //default
    await axios({
      url:`/projects?sort=date`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      console.log(response.data);
      console.log('최신순');
      setIsDate(true);
      setIsPop(false);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  
  const showPopList = async() => {
    await axios({
      url:`/projects?sort=popularity`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      console.log(response.data);
      console.log('인기순');
      setIsPop(true);
      setIsDate(false);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    showDateList();
  }, []);

  const categories = ['1', '2', '3', '4'];
  const [selected, setSelected] = useState("");

  const handleSelect = (e) =>{
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  const searchProject = async()=>{
    await axios({

    })
  }
    return(
        <>
            <HomeBanners />
            <ListNav>
                <Category>
                <span id="category">카테고리</span>
                <select onChange={handleSelect} value={selected}>
                    {categories.map((item) =>(
                    <option value={item} key={item}>
                        {item}
                    </option>
                    ))}
                    </select>
                {/* </select>
                <select name="category">
                    <option value="art">예술</option>
                    <option value="food">음식</option>
                    <option value="donation">기부</option>
                </select> */}
                </Category>

                <Search>
                <input
                    type="text"
                    onChange={(e) => {
                    setSearch(e.target.value);
                    }}
                />
                <svg
                    onClick={() => {
                    console.log(search, '검색');
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>

                {
                    isPop
                    ?(<ListFilterSelected onClick={showPopList}>인기순</ListFilterSelected>)
                    :(<ListFilter onClick={showPopList}>인기순</ListFilter>)
                }
                {
                    isDate
                    ?(<ListFilterSelected onClick={showDateList}>최신순</ListFilterSelected>)
                    :(<ListFilter onClick={showDateList}>최신순</ListFilter>)
                }
                {/* <ListFilter onClick={showPopList}>인기순</ListFilter> */}
                {/* <ListFilter onClick={showDateList}>최신순</ListFilter> */}
                </Search>
            </ListNav>
            <Bar />

            <Container>
                <div className="container">
                    <div className="row">
                        <ProjectLiveCard></ProjectLiveCard>
                        <ProjectLiveCard></ProjectLiveCard>
                        <ProjectLiveCard></ProjectLiveCard>
                        <ProjectLiveCard></ProjectLiveCard>
                        <ProjectLiveCard></ProjectLiveCard>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ProjectLiveList;