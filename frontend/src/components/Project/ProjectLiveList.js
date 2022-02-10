import axios from 'axios';
import { useEffect, useState } from "react";
import HomeBanners from "../Home/HomeBanners";
import { Container } from 'react-bootstrap';
import ProjectLiveCard from './ProjectLiveCard';
import { ListNav, Category, Search, Bar, ListFilter, ListFilterSelected } from './Project.styled';

function ProjectLiveList(){
  const baseUrl = "http://localhost:8080";
  const [isDate, setIsDate] = useState(true);
  const [isPop, setIsPop] = useState(false);
  const [search, setSearch] = useState("");
  const [lives, setLives] = useState([""]);
  const [categories, setCategories] = useState([""]);
  const [selected, setSelected] = useState(0);
  const [sort, setSort] = useState("");
  const all = [
    {
      id: 0,
      name: "전체"
    }
  ];
  let query="";

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

  const enterkey = () =>{
    if(window.event.keyCode === 13) console.log(search);
  }

  const CategorySelected = async() => {
    if(isDate) setSort("date");
    else if(isPop) setSort("viewer");

    if(selected === 0) query=`?sortValue=${sort}`
    else query = `/projectCategory/${selected}`;
    
    await axios({
      url: `/lives`+query,
      method: "get",
      baseURL: baseUrl,
    })
    .then((res) =>{
      setLives([...res.data]);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    Categories();
  }, []);

  useEffect(()=>{
    CategorySelected();
  },[sort, selected, isPop, isDate]);

  // useEffect(()=>{
  //   Setlist();
  // },[sort, selected, isPop, isDate]);

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
                      value={search}
                      onKeyUp={enterkey}
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
                    ?(<ListFilterSelected>인기순</ListFilterSelected>)
                    :(<ListFilter onClick={()=>{setIsPop(true); setIsDate(false); }}>인기순</ListFilter>)
                  }
                  {
                    isDate
                    ?(<ListFilterSelected>최신순</ListFilterSelected>)
                    :(<ListFilter onClick={()=>{setIsDate(true); setIsPop(false);}}>최신순</ListFilter>)
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
                  </div>
              </div>
          </Container>
      </>
  );
}

export default ProjectLiveList;