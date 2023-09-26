import { useState } from "react"
import "./index.css"

// flashcards ---------------------//

export default function FlashCards() {
  return (
    <div className="App">
      <FlashCardsContainer />
    </div>
  )
}

const questions = [
  {
    id: 3457,
    question: "Em qual linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "Quais são os blocos de construção de aplicativos React?",
    answer: "Componentes",
  },
  {
    id: 8832,
    question: "Qual é o nome da sintaxe que usamos para descrever uma UI no React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "Como passar dados de componentes pai para componentes filhos?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "Como dar memória aos componentes?",
    answer: "Hook useState",
  },
  {
    id: 2002,
    question:
      "Como chamamos um elemento de entrada que está completamente sincronizado com o estado?",
    answer: "Elemento controlado",
  }
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
