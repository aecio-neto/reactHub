import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserProfile from "./projetos/projeto1_userProfile/UserProfile"
import TipCalculator from "./projetos/projeto6_tipCalculator/TipCalculator"
import StepsCard from "./projetos/projeto2_stepsCard/StepsCard"
import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/user-card">Cartão de Perfil de Usuário</Link>
            </li>
            <li>
              <Link to="/calculadora-de-gorjetas">Calculadora de Gorjetas</Link>
            </li>
            <li>
              <Link to="/steps-card">Steps Card</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user-card" element={<UserProfile />} />
          <Route path="/calculadora-de-gorjetas" element={<TipCalculator />} />
          <Route path="/steps-card" element={<StepsCard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
