'use client'

import styles from './header.module.css'

import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();

    const routerHome = () => {
        router.push('/')
    }
    const routerAbout = () => {
        console.log('link encontrado')
        router.push('/about');
        }
    const routerContact = () => {
        router.push('/contact')
    }
    const routerBlog = () => {
        router.push('/blog')
    }
    return (
        <div className={styles.container}>
            <header className={styles.struct}>
                <button className={styles.buttonLink} onClick={routerHome}>Home</button>
                <button className={styles.buttonLink} onClick={routerAbout}>About</button>
                <button className={styles.buttonLink} onClick={routerContact}>Contact</button>
                <button className={styles.buttonLink} onClick={routerBlog}>Blog</button>
            </header>     
        </div>
    )
}