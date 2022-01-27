import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Account/Signup/Signup";
import ProjectList from "./components/Project/ProjectList";
import Home from "./components/Home";
import Footer from "./container/Footer";
import Header from "./container/Header";
import GlobalStyle from "./shared/global";
import ProjectLiveList from "./components/Project/ProjectLiveList";
import ProjectEntrance from "./components/Project/ProjectEntrance";
import FindId from "./components/Account/FindAccount/FindId";
import FindPw from "./components/Account/FindAccount/FindPw";
import ChangePw from "./components/Account/FindAccount/ChangePw";
import FindAccount from "./components/Account/FindAccount/FindAccount";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/lives" element={<ProjectLiveList />}></Route>
        <Route path="/notices" element={<h1>공지사항</h1>}></Route>

        <Route
          path="/notices"
          element={
            <>
              <h1>공지사항</h1>
            </>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/projects/entrance" element={<ProjectEntrance />}></Route>
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="/findAccount/*" element={<FindAccount />}></Route>
        <Route path="/changepw" element={<ChangePw />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
