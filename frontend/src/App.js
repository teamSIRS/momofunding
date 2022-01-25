import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Account/Signup/Signup";
<<<<<<< HEAD
import LiveBadge from "./components/Home/Badge";
import ProjectList from "./components/Project/ProjectList";
=======
import Home from "./components/Home";
>>>>>>> 303ac60b4fd6d1e9aeaf04116c5dfb0b70b7c161
import Footer from "./container/Footer";
import Header from "./container/Header";
import GlobalStyle from "./shared/global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route
          path="projects"
          element={
            <div>
              <h1>펀딩하기</h1>
            </div>
          }
        ></Route>
        <Route path="lives" element={<h1>Live *</h1>}></Route>
        <Route path="notices" element={<h1>공지사항</h1>}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
      <ProjectList />
      <Footer />
    </Router>
  );
}

export default App;
