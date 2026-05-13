import styles from './Footer.module.css'

export function Footer () {
    return (
        <footer class={styles.footer}>
            <p class={styles.footer_p}>Desarrollado por 
                <a class={styles.artista} href='https://www.instagram.com/av8visual/' target='_blank'>Santiago Quintero </a> 
                con <span class={styles.artista}>SolidJS</span> - © 2026</p>
        </footer>
    )

}