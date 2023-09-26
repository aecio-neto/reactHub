import { useState } from "react"
import styles from "../travelList.module.css"

export default function Form({ onAddItem }) {
  const [itemDescription, setItemDescription] = useState("")
  const [itemQuantity, setItemQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!itemDescription) return

    const newItem = {
      id: Date.now(),
      description: itemDescription,
      quantity: itemQuantity,
      packed: false,
    }

    onAddItem(newItem)

    setItemDescription("")
    setItemQuantity(1)
  }

  return (
    <form className={styles['add-form']} onSubmit={handleSubmit}>
      <h3>O que preciso levar nessa viagem?</h3>
      <select
        value={itemQuantity}
        onChange={e => setItemQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={itemDescription}
        onChange={e => {
          setItemDescription(e.target.value)
        }}
      />
      <button>Adicionar</button>
    </form>
  )
}