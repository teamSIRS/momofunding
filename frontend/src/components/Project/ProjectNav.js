// 카드로 여러개 나열되어 있는 페이지
import styled from "styled-components";

const ListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0 auto;
  width: 80%;
  span {
    margin: 10px;
  }
`;

const Category = styled.div`
  margin: auto 0;
`;

const Search = styled.div`
  display: flex;
  margin: 10px 10px;
  input {
    text-align: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 17px;
    margin-left: 15px;
    padding-left: 15px;
  }
  svg {
    width: 25px;
    height: 25px;
    margin: 0 30px 0 10px;
  }
  p {
    margin: 3px 10px;
  }
`;

const Bar = styled.hr`
  display: flex;
  margin: 0 auto;
  width: 80%;
  size: 10px;
`;

function ProjectNav() {
  return (
    <>
      <ListNav>
        <Category>
          <span id="category">카테고리</span>
          <select name="category">
            <option value="art">예술</option>
            <option value="food">음식</option>
            <option value="donation">기부</option>
            {/* ????카테고리를 어찌할까용 */}
          </select>
        </Category>

        <Search>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <svg
            onClick={() => {
              console.log("검색");
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

          {/* <span>인기순</span>
                    <span>최신순</span> */}
          <p>인기순</p>
          <p>최신순</p>
        </Search>
      </ListNav>
      <Bar />
    </>
  );
}

export default ProjectNav;
