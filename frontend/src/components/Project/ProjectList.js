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
  const [categories, setCategories] = useState([""]);
  const [selected, setSelected] = useState(1);
  

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
      setCategories([...response.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  const CategorySelected = async() => {
    if(isDate){
      await axios({
        url:`/projects/categories/${selected}?sort=date`,
        method:"get",
        baseURL: baseUrl,
      })
      .then((response)=>{
        console.log(selected);
        console.log(response.data);
        setProjects([...response.data]);
      })
      .catch((err) =>{
        console.log(err);
      })
    }
    else if(isPop){
      await axios({
        url:`/projects/categories/${selected}?sort=popularity`,
        method:"get",
        baseURL: baseUrl,
      })
      .then((response)=>{
        console.log(selected);
        console.log(response.data);
        setProjects([...response.data]);
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  }
  //현재상태
  //처음 들어갔을 때 -> 전체 카테고리
  //카테고리 선택시 -> 현재의 최신순/인기순에 맞춰서 결과 나옴
  //전체 카테고리 보고싶으면 -> 인기순 or 최신순 선택하면 변경됨
  // 즉 '카테고리 -> 인기/최신순 순서'로 선택시 전체목록으로 돌아감....
  // 카테고리 안에서 인기순/최신순은 안된다는 말
  // == 인기/최신순-카테고리(O), 카테고리-인기/최신순(X)
  //DB에 '전체' 카테고리 추가 필요 -> isDate, isPop 상태에 따라서 함수 호출

  //API 불러올 때 if문을 쓸 수는 없는걸까?
  //만약 안된다면...
  //if(isDate === true && 카테고리변경이 일어났다) -> CategoriesDate 불러오기, isDate, isPop 값 변경
  //if(isPop === true && ~~) -> CategoriesPop 불러오기, isDate, isPop 값 변경 (CategoriesPop 함수 새로 만들어야 함)
  //하,,근데 이 경우 문제가...........있음. 카테고리는 그대로 두고 인기순,최신순만 바꾼다면?....어케될까요홍

  //페이지 무한스크롤 = 페이징이랑 똑같이... API가 여러장 있어야함!! 스크롤 넘어갈때마다 새로운 페이지를 불러옴



  ///////////////////////////////

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
            className="bi bi-search"
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