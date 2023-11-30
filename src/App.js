import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./Components/All/all";
import FullStack from "./Components/FullStack/fullStack";
import DataScience from "./Components/DataScience/dataScience";
import CyberSecurity from "./Components/CyberSecurity/cyberSecurity";
import Career from "./Components/Career/career";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/fullStack">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/dataScience">Data Science</Link>
            </li>
            <li>
              <Link to="/cyberSecurity">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullStack" element={<FullStack />} />
          <Route path="/dataScience" element={<DataScience />} />
          <Route path="/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
