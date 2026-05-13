import styles from "../Home.module.css";

export function Producao () {

    return(
        <div class={styles.main} id="prod">
            <div class={styles.sc}>
                <div class={styles.statment}>
                    <h2 class={styles.h2}>Produção e Coordenação Operacional</h2>
                    <p class={styles.p1}>É um papel que eu gosto e no qual me sinto à vontade: sou organizado, metódico, atento aos detalhes e tenho facilidade com números. Me comunico de forma clara e assertiva, e tenho jeito para construir relações de trabalho saudáveis e duradouras. Tenho experiência em produção audiovisual, espetáculos (shows, teatro, dança), festivais e eventos multidisciplinares.</p>
                    <p class={styles.p1}>Minha abordagem está em criar fluxos de trabalho fluidos, eficientes e respeitosos, buscando que cada pessoa possa desempenhar sua função da melhor forma possível. Gosto de desenvolver meus próprios formatos e ferramentas de acordo com as necessidades de cada projeto, mas também me adapto sem dificuldade a estruturas já estabelecidas. Não tenho medo de papelada nem de burocracia.</p>
                </div>
                <div class={styles.statment}>
                    <p class={styles.p1}>Falo quatro idiomas — português, espanhol, francês e inglês — e desde pequeno habitei espaços interculturais, o que me permitiu colaborar com artistas de diferentes origens e disciplinas. Essa combinação de diálogo intercultural com entendimento técnico e conceitual das artes faz com que os artistas se sintam acompanhados e à vontade. Já trabalhei com artistas dos Estados Unidos, Canadá, México, Argentina, Venezuela, Uruguai, Chile, Peru, França, Suíça, Alemanha, Holanda, Reino Unido, Suécia, Polônia, Palestina, Ruanda e Nova Zelândia.</p>
                </div>
            </div>
        </div>
    )
}
