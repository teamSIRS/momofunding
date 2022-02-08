// // 카드로 여러개 나열되어 있는 페이지
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import HomeBanners from "../Home/HomeBanners";
import ProjectCard from "./ProjectCard";
import { ListNav, Category, Search, Bar, ListFilter, ListFilterSelected } from './Project.styled';

function ProjectList(){
  const baseUrl = "http://localhost:8080";
  const [isPop, setIsPop] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([""]);

  const Test = async() =>{
    await axios({
      url: 'http://127.0.0.1:8887/',
      method: "get",
    })
    .then((result) =>{
      console.log('성공');
    })
    .catch((err) =>{
      console.log('실패')
    })

  }

  const [categories, setCategories] = useState([""]);
  const [selected, setSelected] = useState("");

  const handleSelect = (e) =>{
    console.log(e);
    setSelected(e.target.value);
  }

  const Categories = async() => {
    await axios({
      url:`/categories`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      // console.log(response.data);
      // console.log(response.data[0].id);
      setCategories([...response.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  const CategoriesDate = async() => {
    await axios({
      url:`/projects/categories/${selected}`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      console.log(response.data);
      setCategories([...response.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  const showDateList = async() => { //default 최신순
    await axios({
      url:`/projects?sort=date`,
      method:"get",
      baseURL: baseUrl,
    })
    .then((response)=>{
      setIsDate(true);
      setIsPop(false);
      setProjects([...response.data]);
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
      setIsPop(true);
      setIsDate(false);
      setProjects([...response.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    showDateList();
    // Test();
    Categories();
  }, []);




  return(
    <>
      <HomeBanners />
      <ListNav>
        <Category>
          <span id="category">카테고리</span>
          <select onChange={handleSelect} value={selected}>
            {categories.map((category) =>(
              <option value={category.name} key={category.id}>
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
              projects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.id}
                />
              ))
            }
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProjectList;