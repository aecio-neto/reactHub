import { useState } from "react"
import Header from "./Header"
import Form from "./Form"
import PackingList from "./PackingList"
import Stats from "./Stats"
import styles from "../travelList.module.css"

const initialItems = [
  { id: 1, description: "Passaporte", quantity: 1, packed: false },
  { id: 2, description: "Meias", quantity: 12, packed: false },
  { id: 3, description: "Bermuda", quantity: 12, packed: false },
]

// Agora, vou ter que remover um item.
// terei uma função atrelada a um clique

export default function TravelList() {
  const [items, setItems] = useState([...initialItems])

  function handleAddItem(newItem) {
    setItems(items => [...items, newItem])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => id !== item.id))
  }

  // o item é alterado quando marcamos o checkbox
  // por isso, é preciso modificar a propriedade packed, logo, a lista de itens muda
  // abaixo está um exemplo de como alterar apenas uma propriedade do objeto.
  // também é interessante notar que o style está dentro de um ternário, e isso muda o estilo do componente.
  // style={ condição ? {prop: valor} : {}} parece que está sendo retornado um objeto, mas é apenas css dentro do JSX.

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div className={`${styles.app} ${styles["travel-container"]}`}>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}

// items é o conjunto de items. Que é o state que está no App.
// então é o App que precisa passar o handleDeleteItem pro PackingList? E ele passa pro Item?
// como filtro? items.map(item => id !== item.id)

// o item quando marcado será riscado
// o que define isso é o packed
// vai ter que ser um state?

// Pontos importantes:
// early return, caso não aja items na lista, não há cálculo de variáveis
// derived state usando as consts totalItems, itemsPacked e packingPercentage
// condicionais para mostrar diferentes frases/UI, que mudam de acordo com as consts.
// alta interatividade UI
