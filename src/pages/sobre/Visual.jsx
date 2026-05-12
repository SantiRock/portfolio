import styles from "../Home.module.css";

export function Visual () {

    return(
        <div class={styles.main} id="visual">
            <div class={styles.sc}>
                <div class={styles.statment}>
                    <h2 class={styles.h2}>Live Visual</h2>
                    <p class={styles.p1}>O VJing, o mix de vídeo ao vivo e o video-mapping são o campo artístico-técnico que melhor conheço: desde o manuseio de software e equipamentos até a conceitualização de um show, a criação de conteúdo adaptado e a operação ou performance de vídeo em tempo real.</p>
                    <p class={styles.p1}>Meu ponto forte está mais na parte operacional do que na criação de conteúdo. Não sou especialista em After Effects nem em animação 3D, mas consigo conduzir esse processo junto a pessoas com competência na área, garantindo que os conteúdos se adaptem bem a uma operação ao vivo e/ou de video-mapping.</p>
                    <p class={styles.p1}>Entre 2013 e 2016 atuei intensamente em Bogotá, trabalhando em diversos espaços e festivais. Em 2016 ganhei a batalha de VJs do FECIBogotá. Nesse mesmo ano fui para a França, onde trabalhei com associações, coletivos e artistas em múltiplos projetos.</p>
                </div>
                <div class={styles.statment}>
                    <p class={styles.p1}>Trabalhei com diversos softwares — MadMapper, Modul8, TouchDesigner — mas o que domino melhor é o Resolume. Atualmente estou explorando o OpenFrameworks, com foco na linguagem de shaders e na criação de interfaces personalizadas de acordo com as necessidades de cada projeto.</p>
                    <div class={styles.statment1}>
                        <p class={styles.p1}>Nota prática: não tenho licenças de software comercial. Para projetos que exijam o Resolume, a produção deve fornecer o software. Para meus projetos pessoais uso o OpenFrameworks</p>
                    </div>

                </div>
            </div>
        </div>

    )
}


