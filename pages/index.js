import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Chat from '../components/Chat'
import Product from '../components/Product'

export default function Home() {
  return (
    <main className={styles.main}>
      <Product />
      <Post />
      <Chat />
    </main>
  )
}