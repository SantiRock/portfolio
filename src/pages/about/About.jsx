import { createSignal } from "solid-js";
import styles from "./About.module.css";

export function About ({sobreClick, portClick}) {
  const [copied, setCopied] = createSignal("Clique no e-mail para copiá-lo.");

  const copyText = () => {
    const textToCopy = 'sqp.dev@gmail.com';
    navigator.clipboard.writeText(textToCopy);
    setCopied("O e-mail foi copiado.");

    setTimeout(() => {
      setCopied("Clique no e-mail para copiá-lo.");
    }, 2500);
  }

  const cvClick = () => {
    window.open("/SantiagoQuinteroCV2026.pdf", "_blank");
  }

  return(
    <header>
      <h1>Santiago Quintero Pinto</h1>
      <div class={styles.contact_container}>
        <p class={styles.contact} onClick={copyText}>
          Contato: <span class={styles.email}>sqp.dev@gmail.com</span>
        </p>
        <span class={styles.tooltipText}>
          {copied}
        </span>
      </div>
      <a class={styles.a1} href='https://www.instagram.com/av8visual/' target='_blank'>Instagram: av8visual </a> 
      <nav>
        <p class={styles.p1} onClick={sobreClick}>Sobre</p>
        <p class={styles.p1} onClick={portClick}>Portfólio</p>
        <a class={styles.p1} onClick={cvClick}>CV</a>
      </nav>
    </header>
    );
}