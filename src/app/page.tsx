

import Header from '@/components/header/Header'
import styles from './page.module.css'


export default function Home() {
  
  return (
    <main>
      <Header/>
      <div className={styles.home_page}>
        
        <h1 className={styles.name}>Sobre</h1>
      </div>
    </main>
    
  )
}
