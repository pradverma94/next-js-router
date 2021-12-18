import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      this is homepage
      <ul>
        <li>
          <Link href={`/clients`}>Clients</Link>
        </li>
        <li>
          <Link href={`/blogs`}>blogs</Link>
        </li>
      </ul>
    </div>
  )
}
