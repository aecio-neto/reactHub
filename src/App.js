import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserProfile from "./projetos/projeto1_userProfile/UserProfile"
import TipCalculator from "./projetos/projeto6_tipCalculator/TipCalculator"
import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/project1">User Profile</Link>
            </li>
            <li>
              <Link to="/project6">Tip Calculator</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/project1" element={<UserProfile />} />
          <Route path="/project6" element={<TipCalculator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
