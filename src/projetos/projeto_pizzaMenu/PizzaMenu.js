import React from "react"
import styles from "./pizzaMenu.module.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pão com azeite de oliva italiano e alecrim",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomate e mozarela",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Espinafre",
    ingredients: "Tomate, mozarela, espinafre e queijo ricota",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomate, mozarela, cogumelos e cebola",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salaminho",
    ingredients: "Tomate, mozarela e pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Burrata",
    ingredients: "Tomate, mozarela, presunto, rúcula e queijo burrata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

export default function PizzaMenu() {
  return (
    <div className={styles['main-container']}>
      <div className={styles.container}>
        <Header />
        <Menu />
        <Button />
        <Footer />
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <h1>React Pizza!</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizza = pizzas.length

  return (
    <main className={styles.menu}>
      <h2 className="">Cardápio</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Cozinha Italiana autêntica. 6 pratos criativos para escolher. Feito
            no nosso forno de pedra, tudo orgânico, tudo delicioso.
          </p>

          <ul className={styles.pizzas}>
            {pizzaData.map(pizza => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />
            })}
          </ul>
        </>
      ) : (
        <p>Ainda estamos trabalhando no nosso cardápio. Volte em breve.</p>
      )}

      {/* Componentes utilizados de forma "manual"
          <Pizza name="Pizza Spinaci" ingredients="Tomante, Espinafre" price="56" photoName="pizzas/spinaci.jpg" />
          <Pizza name="Pizza Margherita" ingredients="Tomante, Manjericão" price="50" photoName="pizzas/margherita.jpg" /> 
      */}
    </main>
  )
}

function Pizza({ pizzaObj }) {
  const { name, photoName, ingredients, price, soldOut } = pizzaObj

  return (
    <li
      className={
        soldOut ? `${styles.pizza} ${styles["sold-out"]}` : `${styles.pizza}`
      }
    >
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Ingredientes: {ingredients}.</p>
        <span>{soldOut ? "ESGOTADO" : price}</span>
      </div>
    </li>
  )
}

// Primeira versão do componente Pizza (um certo malabarismo)

// function Pizza2 () {
//   const pizzas = pizzaData.map((pizza) => {
//     return (
//         <li key={pizza.name}>
//           <div className='pizza'>
//             <img src={`./${pizza.photoName}`} alt={pizza.name} />
//               <div>
//                 <h3>{pizza.name}</h3>
//                 <p>Ingredientes: {pizza.ingredients}</p>
//                 <span>{pizza.price}</span>
//               </div>
//           </div>
//         </li>
//     )
//   })
//   return <ul className='pizzas'>{pizzas}</ul>
// }

function Button() {
  return <button className={styles.btn}>Fazer Pedido</button>
}

function Footer() {
  const openHour = 10
  const closeHour = 23
  const hour = new Date().getHours()
  const isOpen = hour >= openHour && hour < closeHour
  const message = isOpen
    ? "Estamos abertos. Venha nos visitar ou faça o seu pedido online!"
    : "Horário de funcionamento: 18 às 23 horas"

  return (
    <footer className={styles.footer}>
      <h3>{message}</h3>
    </footer>
  )
}

// const root = ReactDom.createRoot(document.getElementById("root"))
// root.render(<App />)

// Antes do react18

// ReactDOM.render(<App />, document.getElementById("root "))
