import styles from "./Home.module.css";
import { Producao } from "./sobre/Producao";
import { Visual } from './sobre/Visual';
import { Exploracoes } from './sobre/Exploracoes';


export function Home () {

    return(
        <div class={styles.main}>
            <div class={styles.sc}>
                <div class={styles.statment}>
                    <p class={styles.p1}>Profissional colombiano com formação em cinema e mestrado em artes digitais, com um perfil voltado para o setor audiovisual, as artes do espetáculo e os eventos ao vivo. Minha abordagem se baseia em entender a imagem, a luz e o som como um sistema integrado, com capacidade de me adaptar a diferentes contextos culturais e técnicos. Minhas principais áreas de atuação são a produção e coordenação e o vídeo em tempo real e video-mapping, complementadas por explorações em desenvolvimento web.</p>
                </div>
                <div class={styles.statment}>
                    <p class={styles.p1}>Minha trajetória combina experiência técnica, sensibilidade artística e capacidade organizacional, integrando essas três dimensões de forma natural em cada projeto.</p>
                    <a class={styles.pl} href="#prod">- Produção e Coordenação Operacional</a>
                    <a class={styles.pl} href="#visual">- Live Visuals</a>
                    <a class={styles.pl} href="#explo">- Desenvolvimento web</a>
                </div>
            </div>
            <div class={styles.sc}>
                <Producao />
                <Visual />
                <Exploracoes />
            </div>

        </div>
    );
}


