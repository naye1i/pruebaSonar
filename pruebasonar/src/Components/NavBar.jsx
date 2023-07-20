import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddTutorial from "./AddTutorial";
import Tutorial from "./Tutorial";
import TutorialList from "./TutorialList";

const NavBar = () => {
  return (
    <Router>
      <nav>
        <div>
          <a href="/tutorials">tutorials</a>
          <Link to={"/add"}>Add</Link>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<TutorialList />} />
          <Route path="/tutorials" element={<TutorialList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
