import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserProfile from "./projetos/projeto1_userProfile/UserProfile"
import StepsCard from "./projetos/projeto2_stepsCard/StepsCard"
import FutureDate from "./projetos/projeto3_futureDate/FutureDate"
import FlashCards from "./projetos/projeto4_flashcards/FlashCards"
import Accordion from "./projetos/projeto5_accordion/Accordion"
import TipCalculator from "./projetos/projeto6_tipCalculator/TipCalculator"
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
              <Link to="/steps-card">Steps Card</Link>
            </li>
            <li>
              <Link to="/data-futura">Data Futura</Link>
            </li>
            <li>
              <Link to="/flash-cards">Flash Cards</Link>
            </li>
            <li>
              <Link to="/accordion">Acordeão</Link>
            </li>
            <li>
              <Link to="/calculadora-de-gorjetas">Calculadora de Gorjetas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user-card" element={<UserProfile />} />
          <Route path="/calculadora-de-gorjetas" element={<TipCalculator />} />
          <Route path="/steps-card" element={<StepsCard />} />
          <Route path="/data-futura" element={<FutureDate />} />
          <Route path="/flash-cards" element={<FlashCards />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
