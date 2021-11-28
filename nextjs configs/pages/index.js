import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {process.env.apiUrl}
    </div>
  )
}
