import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Account/Signup/Signup";
import ProjectList from "./components/Project/ProjectList";
import Home from "./components/Home";
import Footer from "./container/Footer";
import Header from "./container/Header";
import GlobalStyle from "./shared/global";
import ProjectLiveList from "./components/Project/ProjectLiveList";
import ProjectEntrance from "./components/Project/ProjectEntrance";
import ChangePw from "./components/Account/FindAccount/ChangePw";
import FindAccount from "./components/Account/FindAccount/FindAccount";
import ProjectDetail from "./components/ProjectDetail";
import Funding from "./components/Funding";
import ProfileMember from "./components/Profile/ProfileMember/ProfileMember"''
import ProjectManagement from "./components/ProjectManagement/ProjectManagement";
import Notice from "./components/Notice/Notice";

import ProjectStory from "./components/ProjectDetail/ProjectContent/ProjectStory";
import ProjectCommunity from "./components/ProjectDetail/ProjectContent/ProjectCommunity";
import CreateNotice from "./components/Notice/CreateNotice/CreateNotice";
import NoticeDetail from "./components/Notice/NoticeDetail/NoticeDetail";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/lives" element={<ProjectLiveList />}></Route>
        <Route path="/notices" element={<Notice />}></Route>
        <Route path="/notices/create" element={<CreateNotice />}></Route>
        <Route path="/notices/detail" element={<NoticeDetail />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/projects/entrance" element={<ProjectEntrance />}></Route>
        <Route path="projects/:id" element={<ProjectDetail />}>
          <Route index element={<ProjectCommunity />} />
          <Route path="story" element={<ProjectStory />} />
          <Route path="notices" element={<h1>공지사항</h1>} />
          <Route path="community" element={<ProjectCommunity />} />
        </Route>
        <Route path="/findAccount/*" element={<FindAccount />}></Route>
        <Route path="/changepw" element={<ChangePw />}></Route>
        <Route path="/funding" element={<Funding />}></Route>
        <Route path="/profile/member" element={<ProfileMember />}></Route>

        <Route
          path="/projects/management/*"
          element={<ProjectManagement />}
        ></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
