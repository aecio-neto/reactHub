import { useState } from "react"
import Item from "./Item"
import styles from "../travelList.module.css"

export default function PackingList({ items, setItems, onDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("input")

  let sortedItems

  sortBy === "input" && (sortedItems = items)

  sortBy === "packed" &&
    (sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed)))

  sortBy === "description" &&
    (sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)))

  function clearList() {
    const confirmed = window.confirm(
      "Tem certeza que quer apagar todos os items?"
    )
    confirmed && setItems([])
  }

  return (
    <div className={styles.list}>
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className={styles.actions}>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Classificar pelo cadastro</option>
          <option value="description">Classificar pela descrição</option>
          <option value="packed">Classificar embalados </option>
        </select>
        {/* <select name="" id="" multiple={false}>
          <option value="">Limpar lista</option>
        </select> */}
        <button onClick={clearList}>Limpar lista</button>
      </div>
    </div>
  )
}