import { useState } from "react"
import "./index.css"

const faqs = [
  {
    title: "Onde essas cadeiras são montadas?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Por quanto tempo posso devolver minha cadeira?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Vocês enviam para países fora da União Europeia?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
]

export default function App() {
  return (
    <>
      <Accordion />
    </>
  )
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem
            faq={faq}
            index={index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            isOpen={openIndex === index}
            key={index}
          />
        ))}
    </ul>
  )
}

function AccordionItem({ faq, index, isOpen, onToggle }) {
  return (
    <li className={`item ${isOpen ? "open" : ""}`} key={index} onClick={onToggle}>
        <p className="number"> {index < 10 ? `0${index + 1}` : `${index}`} </p>
        <p className="title">{faq.title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{faq.text}</div>}
    </li>
  )
}
