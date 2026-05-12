import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { prodapi } from "./prodapi";
import { Images } from "../images/Images";

export const pc = 2;

function CaribeSound () {

  return(
    <div class={`${styles.container} ${styles.cp}`}>
      <h4 class={styles.title}>CaribeSound </h4>
      <p><span class={styles.bold}>Data:</span> 22 de junho de 2019</p>
      <p><span class={styles.bold}>Local:</span> Mix'Art Myrys, Toulouse, Francia</p>
      <p><span class={styles.bold}>Cargo:</span> Chefe de Projecto</p>
      <p><span class={styles.bold}>Missões:</span> Imaginar, planejar e executar. Fiz o contato com os participantes e coordenei todo o projeto.</p>
      <p><span class={styles.bold}>Conceito:</span> Festival musical e de artes visuais de pequeno formato em torno da cultura <span class={styles.obra}>"picotera"</span> do caribe colombiano</p>
      <p><span class={styles.bold}>Equipe técnica, artística e logística:</span> 60 pessoas</p>
      <p><span class={styles.bold}>Público:</span> 700 pessoas</p>
      <p class={styles.bold}>Programação:</p>
      <ul class={styles.ul}>
        <li class={styles.list}>Mural por <span class={styles.artista}>Soma</span> (Colombia) e <span class={styles.artista}>Nav Svit</span> (Francia)</li>
        <li class={styles.list}>Exposição <span class={styles.obra}>"Desde Abajo"</span> de <span class={styles.artista}>Lesli Moquin</span> (Francia)</li>
        <li class={styles.list}>Exibição do filme <span class={styles.obra}>"Picó: la maquina musical del Caribe"</span> de <span class={styles.artista}>Roberto de Zubiria</span> (Colombia)</li>
        <li class={styles.list}>Apresentação musical por <span class={styles.artista}>DJ Galletas Calientes</span> (Colombia) e <span class={styles.artista}>DJ NoBreakfast</span> (Francia)</li>
        <li class={styles.list}>Video Mapping por <span class={styles.artista}>Felipe Vargas</span> (Colombia)</li>
        <li class={styles.list}>Instalação audiovisual interativa por <span class={styles.artista}>Le Proyectarium</span> (Francia)</li>
        <li class={styles.list}>Parranda Vallenata pelo <span class={styles.artista}>Grupo La Olla</span> (Colombia)</li>
        <li class={styles.list}>Aula de dança por <span class={styles.artista}>Anika Dance</span> (Colombia)</li>
        <li class={styles.list}>Comida e produtos colombianos</li>
      </ul>
      <p><span class={styles.bold}>Com o apoio de:</span> Mix'Art Myrys, Festival Locombia, Guayabo Colectivo, Talowa Producciones, Latino Graff, Le Proyectarium, Roots of One Tree Sound System, Anika Dance</p>
      <p class={styles.bold}>Links:</p>
      <ul>
        <li><a href="https://emelinejonetcom.wordpress.com/2019/07/31/colombian-caribbean-festival/" target="_blank">Resenha Emiline Jonet</a></li>
        <li><a href="https://fb.watch/pfkIBV71P4/" target="_blank">Mural por Soma</a></li>
      </ul>
      <Images obj={prodapi.caribesound}/>
    </div>
  )
}

function MasProd () {
  return(
    <div class={`${styles.container} ${styles.cp}`}>
      <div class={styles.container}>
        <p><span class={styles.bold}>Proyecto: </span><span class={styles.artista}>6ta Bienal Internacional de Danza de Cali</span></p>
        <p><span class={styles.bold}>Fecha:</span> 9 al 12 de Noviembre de 2023</p>
        <p><span class={styles.bold}>Lugar:</span> Cali, Colombia</p>
        <p><span class={styles.bold}>Cargo desempeñado:</span> Intérpete - Asistencia de producción para Ruth Childs, Crazy Smooth y Dorothée Munyaneza</p>
        <Images obj={prodapi.bienaldedanza} />
     </div>
      <div class={styles.container}>
        <p><span class={styles.bold}>Proyecto: </span><span class={styles.artista}>CaribeFemFest Vol5</span></p>
        <p><span class={styles.bold}>Fecha:</span> 26, 27 & 28 de Marzo de 2022</p>
        <p><span class={styles.bold}>Lugar:</span> Plataforma Caníbal, Barranquilla, Colombia</p>
        <p><span class={styles.bold}>Cargo desempeñado:</span> Apoyo logístico</p>
        <p><span class={styles.bold}>Concepto:</span> Festival feminista y diverso en el marco del Carnaval de Barranquilla.</p>
        <p class={styles.bold}>Equipo:</p>
        <ul class={styles.ul}>
          <li class={styles.list}>Producción: Fundación Matronas</li>
        </ul>
        <Images obj={prodapi.caribefemfest} />
     </div>
     <div class={styles.container}>
        <p><span class={styles.bold}>Proyecto: </span>presentación de la obra <span class={styles.artista}>La Itinerancia de la tribú del gitano Melquìadíades</span></p>
        <p><span class={styles.bold}>Fecha:</span> 14 de Marzo de 2020</p>
        <p><span class={styles.bold}>Lugar:</span> Teatro Cenit, Minca, Colombia</p>
        <p><span class={styles.bold}>Cargo desempeñado:</span> Asistencia de producción</p>
        <p><span class={styles.bold}>Concepto:</span> Presentación de obra de teatro y compartir</p>
        <p class={styles.bold}>Equipo:</p>
        <ul class={styles.ul}>
          <li class={styles.list}>Producción: Cenit Arte Natura</li>
          <li class={styles.list}>Compañia: Teatro Itinerante del Sol</li>
          <li class={styles.list}>Directora: Beatriz Camargo</li>
          <li class={styles.list}>Asistentes de producción: Santiago , Carmen Almeida y Carlos Pérez</li>
        </ul>
        <Images obj={prodapi.teatrocenit} />
     </div>
      <p>y muchos más ...</p>
    </div>
  )
}


export function Prod () {
  const [showCaribeSound, setShowCaribeSound] = createSignal(false);
  const [showMas, setShowMas] = createSignal(false);

  const open_CaribeSound = () => {
    setShowCaribeSound(prev => !prev);

  }

  const open_Mas = () => {
    setShowMas(prev => !prev);
  }

    return(
        <div class={styles.container}>
          <ul>
            <li id="caribesound" class={styles.proyecto} onclick={open_CaribeSound}>
              CaribeSound <span class={styles.type}>Festival Interdisciplinar</span> / 2019
            </li>
            {showCaribeSound() && (<CaribeSound/>)}

            <li id="mas" class={styles.proyecto} onclick={open_Mas}>+</li>
            {showMas() && (<MasProd />)}
          </ul>    
        </div>
    );
}