import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import UserProfile from "./projetos/projeto1_userProfile/UserProfile"
import StepsCard from "./projetos/projeto2_stepsCard/StepsCard"
import FutureDate from "./projetos/projeto3_futureDate/FutureDate"
import FlashCards from "./projetos/projeto4_flashcards/FlashCards"
import Accordion from "./projetos/projeto5_accordion/Accordion"
import TipCalculator from "./projetos/projeto6_tipCalculator/TipCalculator"
import PizzaMenu from "./projetos/projeto_pizzaMenu/PizzaMenu"
import TravelList from "./projetos/projeto_travelList/components/TravelList"
import "./global.css"

function App() {
  return (
    <Router>
      <div className="projects-container">
        <nav>
          <ul>
            <li>
              <Link to="/projeto6">Calculadora de Gorjetas</Link>
            </li>
            <li>
              <Link to="/projeto5">Acordeão</Link>
            </li>
            <li>
              <Link to="/projeto4">Flash Cards</Link>
            </li>
            <li>
              <Link to="/projeto3">Data Futura</Link>
            </li>
            <li>
              <Link to="/projeto2">Steps Card</Link>
            </li>
            <li>
              <Link to="/projeto1">Cartão de Perfil de Usuário</Link>
            </li>
            <li>
              <Link to="/pizza-menu">Pizza Menu</Link>
            </li>
            <li>
              <Link to="/baggage-buddy">Baggage Budy</Link>
            </li>
          </ul>
        </nav>
          <Routes>
            <Route path="/projeto6" element={<TipCalculator />} />
            <Route path="/projeto5" element={<Accordion />} />
            <Route path="/projeto4" element={<FlashCards />} />
            <Route path="/projeto3" element={<FutureDate />} />
            <Route path="/projeto2" element={<StepsCard />} />
            <Route path="/projeto1" element={<UserProfile />} />
            <Route path="/pizza-menu" element={<PizzaMenu />} />
            <Route path="/baggage-buddy" element={<TravelList />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
