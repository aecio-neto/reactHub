import { useState } from "react"
import "./styles.css"

export default function FutureDate() {
  const [days, setDays] = useState(1)
  const [interval, setInterval] = useState(1)
  const date = getFormatedFutureDate(days)

  function incrementDays() {
    setDays(d => d + interval)
  }
  function decrementDays() {
    setDays(d => d - interval)
  }
  function reset() {
    setDays(0)
    setInterval(1)
  }

  function getFormatedFutureDate(days) {
    const weekdays = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ]
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + days)
    const formatedFutureDate = `
      Daqui a ${days} ${days === 1 ? "dia" : "dias"} será 
      ${weekdays[futureDate.getDay()]}, 
      ${futureDate.getDate()} de 
      ${futureDate.toLocaleDateString("pt-BR", { month: "long" })} de 
      ${futureDate.getFullYear()}
    `

    return formatedFutureDate
  }

  // no lugar de botões, terei um input range. o evento será de change?

  return (
    <div className="App">
      <div>
        <div>
          <input
            onChange={e => setInterval(Number(e.target.value))}
            type="range"
            min="0"
            max="10"
            value={interval}
          />
          <label htmlFor="interval">{interval}</label>
        </div>
      </div>
      <div>
        <button onClick={decrementDays}> - </button>
        <input
          onChange={e => setDays(Number(e.target.value))}
          type="number"
          value={days}
        />
        <button onClick={incrementDays}> + </button>
        <p>{date}</p>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
