import styles from "../Home.module.css";

export function Exploracoes () {

    return(
        <div class={styles.main} id="explo">
            <div class={styles.sc}>
                <div class={styles.statment}>
                    <h3 class={styles.h3}>Iluminaçao cênica</h3>
                    <p class={styles.p1}>Na minha trajetória pelas artes cênicas tive a oportunidade de me aproximar do mundo da iluminação para espetáculos. É uma área que me interessa continuar desenvolvendo, embora ainda me posicione como aprendiz.</p>
                    <h3 class={styles.h3}>Desenvolvimento Web</h3>
                    <p class={styles.p1}>Em 2022 me inscrevi em um curso de desenvolvimento web para fortalecer minhas capacidades de programação. Encontrei nessa área uma atividade que gosto e na qual me sinto à vontade. Tenho explorado o stack HTML, CSS, JavaScript, React, Three.js e integração de APIs, com interesse em avançar para o desenvolvimento de aplicações com React Native. Meu ponto forte é o frontend, com bom olho para o acabado visual e a lógica de interação. O backend não é a minha área.</p>
                </div>
                <div class={styles.statment}>
                    <h3 class={styles.h3}>Artes visuais e gráficas</h3>
                    <p class={styles.p1}>Sempre tive proximidade com o mundo da gráfica e da impressão — serigrafia, linogravura — por meio de amizades e espaços compartilhados. De vez em quando faço peças próprias, seja para desenvolver uma ideia, para um flyer ou para conteúdo digital. Não sou designer de formação, mas tenho critério gráfico e sensibilidade visual.</p>
                    <h3 class={styles.h3a}>Som e música</h3>
                    <p class={styles.p1}>Sou apaixonado por música e desenvolvi diversos projetos pessoais: como DJ selector, com um programa de rádio, e atualmente com um projeto de produção musical com apoio de ferramentas de inteligência artificial.</p>
                </div>
            </div>
        </div>
    )
}


