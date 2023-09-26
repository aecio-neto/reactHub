import styles from "../travelList.module.css"

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className={styles.stats}>
        <em>Vamos começar a organizar as malas? 🧳</em>
      </p>
    )

  const totalItems = items.length
  const itemsPacked = items.filter(item => item.packed).length
  const packingPercentage = Math.round((itemsPacked / totalItems) * 100)

  return (
    <footer className={styles.stats}>
      {packingPercentage === 100 ? (
        <em>Ótimo! Tudo pronto para viajar! 🌎</em>
      ) : (
        <em>
          Você tem {items.length} items na lista, já arrumou {itemsPacked} (
          {packingPercentage}%)
        </em>
      )}
    </footer>
  )
}