import axios from "axios";
import { useEffect, useState } from "react";
import HomeBanners from "../Home/HomeBanners";
import { Col, Container } from "react-bootstrap";
import ProjectLiveCard from "./ProjectLiveCard";
import {
  ListNav,
  Category,
  Search,
  Bar,
  ListFilter,
  ListFilterSelected,
} from "./Project.styled";
import NonExist from "./NonExist";
import { baseUrl } from "../../App";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MomoColor, MomoStrongColor } from "../../shared/global";

const SelectCategory = styled.select`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  border: solid 1.7px black;
  text-align: center;
  vertical-align: center;
  &: focus {
    border: solid 2.5px #6667ab;
  }
`;

const ProjectLiveListMain = styled.div`
  margin-bottom: 60px;
`;
const ProjectLiveLink = styled(Link)`
  color: black;
  :hover {
    color: ${MomoStrongColor};
  }
`;

function ProjectLiveList() {
  const [isDate, setIsDate] = useState(true);
  const [isPop, setIsPop] = useState(false);
  const [search, setSearch] = useState("");
  const [lives, setLives] = useState([""]);
  const [categories, setCategories] = useState([""]);
  const [selected, setSelected] = useState(0);
  const [isExist, setIsExist] = useState(true);
  const all = [
    {
      id: 0,
      name: "전체",
    },
  ];

  let orderQuery = "";
  let categoryQuery = "";
  let keywordQuery = "";

  const handleSelect = (e) => {
    setSelected(Number(e.target.value));
    setSearch("");
  };

  const Categories = async () => {
    await axios({
      url: `/categories`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        setCategories([...all, ...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const enterkey = () => {
    if (window.event.keyCode === 13) Setlist();
  };

  const Setlist = async () => {
    if (isDate) {
      orderQuery = "?order=date";
    } else {
      orderQuery = "?order=popularity";
    }

    if (selected !== 0) categoryQuery = "&categoryId=" + selected;
    else categoryQuery = "";

    if (search !== "") keywordQuery = "&keyword=" + search;
    else keywordQuery = "";

    await axios({
      url: `/lives/search` + orderQuery + categoryQuery + keywordQuery,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        // console.log(response.data);
        setLives([...response.data]);
        if (response.data === "") setIsExist(false);
        else setIsExist(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Categories();
  }, []);

  useEffect(() => {
    Setlist();
  }, [selected, isPop, isDate]);

  return (
    <>
      <ProjectLiveListMain>
        <HomeBanners />
        <ListNav>
          <Category>
            <span id="category">카테고리</span>
            <SelectCategory onChange={handleSelect} value={selected}>
              {categories.map((category, index) => (
                <option value={category.id} key={index}>
                  {category.name}
                </option>
              ))}
            </SelectCategory>
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
                Setlist();
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

            {isPop ? (
              <ListFilterSelected>인기순</ListFilterSelected>
            ) : (
              <ListFilter
                onClick={() => {
                  setIsPop(true);
                  setIsDate(false);
                }}
              >
                인기순
              </ListFilter>
            )}
            {isDate ? (
              <ListFilterSelected>최신순</ListFilterSelected>
            ) : (
              <ListFilter
                onClick={() => {
                  setIsDate(true);
                  setIsPop(false);
                }}
              >
                최신순
              </ListFilter>
            )}
          </Search>
        </ListNav>
        <Bar />

        <Container>
          <div className="container">
            <div className="row">
              {isExist ? (
                lives.map((live, index) => (
                  <Col sm={6}>
                    <ProjectLiveLink
                      to={`/lives/${live.sessionId}/${live.projectId}`}
                      key={index}
                    >
                      <ProjectLiveCard live={live} key={index} />
                    </ProjectLiveLink>
                  </Col>
                ))
              ) : (
                <NonExist ment="검색결과" />
              )}
            </div>
          </div>
        </Container>
      </ProjectLiveListMain>
    </>
  );
}

export default ProjectLiveList;
