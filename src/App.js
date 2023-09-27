import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserProfile from "./projetos/projeto1_userProfile/UserProfile"
import StepsCard from "./projetos/projeto2_stepsCard/StepsCard"
import FutureDate from "./projetos/projeto3_futureDate/FutureDate"
import FlashCards from "./projetos/projeto4_flashcards/FlashCards"
import Accordion from "./projetos/projeto5_accordion/Accordion"
import TipCalculator from "./projetos/projeto6_tipCalculator/TipCalculator"
import PizzaMenu from "./projetos/projeto_pizzaMenu/PizzaMenu"
import TravelList from "./projetos/projeto_travelList/components/TravelList"
import RachaConta from "./projetos/projeto7_rachaConta/RachaConta"
import "./global.css"

function App() {
  return (
    <Router>
      <div className="projects-container">
        <h1>Projetos React</h1>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Júnior</th>
                <th>Intermediário</th>
                <th>Avançado</th>
                <th>Profissional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/projeto7">Racha Conta</Link>
                  <br />
                  <Link to="/projeto6">Calculadora de Gorjetas</Link>
                  <br />
                  <Link to="/projeto5">Acordeão</Link>
                  <br />
                  <Link to="/projeto4">Flash Cards</Link>
                  <br />
                  <Link to="/projeto3">Data Futura</Link>
                  <br />
                  <Link to="/projeto2">Steps Card</Link>
                  <br />
                  <Link to="/projeto1">Cartão de Perfil de Usuário</Link>
                  <br />
                  <Link to="/pizza-menu">Pizza Menu</Link>
                  <br />
                  <Link to="/baggage-buddy">Baggage Buddy</Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Júnior: </strong> foco em gerenciamento de estado</li>
          </ul>
          <p>Abaixo você poderá ver a renderização dos projetos. Os estilos ainda estão sendo configurados. A visualização será melhor no desktop.</p>
        </div>
        <Routes>
          <Route path="/projeto7" element={<RachaConta />} />
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
