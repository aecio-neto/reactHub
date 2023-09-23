import { useState } from "react"
import "./index.css"

// flashcards ---------------------//

export default function App() {
  return (
    <div className="App">
      <FlashCardsContainer />
    </div>
  )
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
]

// ui montado
// no clique, quero mostrar a resposta.
// no clique, o style muda background
// como mudar apenas o elemento clicado?
// no clique, apenas o elemento clicado muda o backgroud

function FlashCardsContainer() {

  return (
    <div className="flashcards">
      <Card />
    </div>
  )
}

function Card() {
  const [selectedId, setSelectedId] = useState(null)

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return (
    <>
      {questions.map(q => (
        <div
          className={selectedId === q.id ? "selected" : ""}
          onClick={() => handleClick(q.id)}
          key={q.id}
        >
          <p>{selectedId === q.id ? q.answer : q.question}</p>
        </div>
      ))}
    </>
  )
}

// Pontos importantes
// cada cartão tem seu próprio state. Inicialmente ele é null. 
// Após o clique ele é igual ao id do cartão. 
// o state junto com a classe css definem o estilo da renderização. 
// Os ternários servem para definir o que é mostrado.
