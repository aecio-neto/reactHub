import { useState } from "react"
import "./index.css";

const messages = [
  "Aprender React ⚛️",
  "Me candidatar a vagas 💼",
  "Investir o salário novo 🤑",
]

export default function StepsCard() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const handlePrev = () => {
    setStep(step === 1 ? step : step => step - 1)
  }

  const handleNext = () => {
    setStep(step === 3 ? step : step => step + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈🏼</span>Prev
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉🏽</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

{/* <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
  <span>👈🏼</span>Prev
</Button> */}
