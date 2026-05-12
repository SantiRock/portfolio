import styles from "../Home.module.css";

export function Exploracoes () {

    return(
        <div class={styles.main} id="explo">
            <div class={styles.sc}>
                <div class={styles.statment}>
                    <h3 class={styles.h3}>Iluminaçao cênica</h3>
                    <p class={styles.p1}>Na minha trajetória pelas artes cênicas tive a oportunidade de me aproximar do mundo da iluminação para espetáculos. É uma área que me interessa continuar desenvolvendo, embora ainda me posicione como aprendiz.</p>
                    <h3 class={styles.h3a}>Som e música</h3>
                    <p class={styles.p1}>Sou apaixonado por música e desenvolvi diversos projetos pessoais: como DJ selector, com um programa de rádio, e atualmente com um projeto de produção musical com apoio de ferramentas de inteligência artificial.</p>
                </div>
                <div class={styles.statment}>
                    <h3 class={styles.h3}>Artes visuais e gráficas</h3>
                    <p class={styles.p1}> Sempre tive proximidade com o mundo da gráfica e da impressão — serigrafia, linogravura — por meio de amizades e espaços compartilhados. De vez em quando faço peças próprias, seja para desenvolver uma ideia, para um flyer ou para conteúdo digital. Não sou designer de formação, mas tenho critério gráfico e sensibilidade visual.</p>
                </div>
            </div>
        </div>
    )
}


