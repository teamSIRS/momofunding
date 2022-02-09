import axios from 'axios';
import { useEffect, useState } from "react";
import HomeBanners from "../Home/HomeBanners";
import { Col, Container, Row } from 'react-bootstrap';
import ProjectLiveCard from './ProjectLiveCard';
import { ListNav, Category, Search, Bar, ListFilter, ListFilterSelected } from './Project.styled';
import LiveList from '../Profile/ProfileProjectDetail/LiveRecord/LiveList';

function ProjectLiveList(){
  const baseUrl = "http://localhost:8080";
  const [isDate, setIsDate] = useState(true);
  const [isPop, setIsPop] = useState(false);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([""]);
  const [selected, setSelected] = useState(0);
  const [lives, setLives] = useState([""]);
  const [sort, setSort] = useState("");
  const all = [
    {
      id: 0,
      name: "전체"
    }
  ];

  const handleSelect = (e) =>{
    setSelected(Number(e.target.value));
  }

  const Categories = async() => {
    await axios({
      url:`/categories`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{;
      setCategories([...all, ...response.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  const CategorySelected = async() => {
    //selected === 1 일때 에러!
    await axios({
      url:`lives/projectCategory/${selected}`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      setLives([...response.data]);
      console.log('라이브카테', lives);
      console.log(selected);
    })
    .catch((err) =>{
      console.log(err);
    })
    // if(selected === 1){
    //   await axios({
    //     url:`/lives?sortValue=date`, //sort에 따라서......해야함. 지금은 무조건 최신순
    //     method:"get",
    //     baseURL: baseUrl,
    //   })
    //   .then((response)=>{
    //     setLives([...response.data]);
    //   })
    //   .catch((err) =>{
    //     console.log(err);
    //   })
    // }
    // else{
    //   // let sort="";
    //   // if(isDate) sort="date";
    //   // else if(isPop) sort="popularity"
    //   await axios({
    //     url:`lives/projectCategory/${selected}`,
    //     method:"get",
    //     baseURL: baseUrl,
    //   })
    //   .then((response)=>{
    //     setLives([...response.data]);
    //     console.log('라이브카테', lives);
    //   })
    //   .catch((err) =>{
    //     console.log(err);
    //   })
    // }
  }

  const showDateList = async() => { //default
    await axios({
      url:`/lives?sortValue=date`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      setIsDate(true);
      setIsPop(false);
      setLives([...response.data]);
      // console.log(lives);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  
  const showPopList = async() =>{
    await axios({
      url:`/lives?sortValue=viewer`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((res) =>{
      setIsDate(false);
      setIsPop(true);
      setLives([...res.data]);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    showDateList();
    Categories();
  }, []);

  useEffect(()=>{
    CategorySelected();
  },[selected]);

  return(
      <>
          <HomeBanners />
          <ListNav>
              <Category>
              <span id="category">카테고리</span>
                <select onChange={handleSelect} value={selected}>
                  {categories.map((category) =>(
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
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
              </Search>
          </ListNav>
          <Bar />

          <Container>
              <div className="container">
                  <div className="row">
                    {
                      lives.map((live) =>(
                        <ProjectLiveCard 
                          live={live}
                          key={live.id}
                        />
                      ))
                    }
                      {/* <ProjectLiveCard></ProjectLiveCard>
                      <ProjectLiveCard></ProjectLiveCard>
                      <ProjectLiveCard></ProjectLiveCard>
                      <ProjectLiveCard></ProjectLiveCard> */}
                  </div>
              </div>
          </Container>
      </>
  );
}

export default ProjectLiveList;