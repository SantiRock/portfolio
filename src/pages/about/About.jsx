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
      <nav>
        <p class={styles.p1} onClick={sobreClick}>Sobre</p>
        <p class={styles.p1} onClick={portClick}>Portfólio</p>
      </nav>
    </header>
    );
}