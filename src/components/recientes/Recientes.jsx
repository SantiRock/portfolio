import { createSignal } from "solid-js";
import { recentapi } from "./recienteapi";
import styles from "../Components.module.css";

export const rc = Object.keys(recentapi).length;

function Recent ({obj}) {
    return(
    <div class={`${styles.container} ${styles.cp}`}>
        <h4 class={styles.title}>{obj.title}</h4>
        <p><span class={styles.bold}>Date:</span> {obj.fecha}</p>
        <p><span class={styles.bold}>Conceito:</span> {obj.concepto}</p>
        {obj.enlaces && (
        <>
          <p class={styles.bold}>Links:</p>
          <ul class={styles.ul}>
            {obj.enlaces.map(({id, enlace, text}) => (
              <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
          </ul>
        </>
      )}
    </div>
    )
}

export function Recientes () {
    const [showPipoca, setShowPipoca] = createSignal(false);
    const [showAi, setShowAi] = createSignal(false);
    const [showZhizwha, setShowZhizwha] = createSignal(false);
    const [showAstronativo, setShowAstronativo] = createSignal(false);
    const [showGallery, setShowGallery] = createSignal(false);

    const open_Pipoca = () => {
        setShowPipoca(prev => !prev);
    }

    const open_ai = () => {
        setShowAi(prev => !prev);
    }

    const open_Zhizhwa = () => {
        setShowZhizwha(prev => !prev);
    }

    const open_Astronativo = () => {
        setShowAstronativo(prev => !prev);
    }

    const open_Gallery = () => {
        setShowGallery(prev => !prev);
    }

    return(
        <div class={styles.container}>
            <ul>
                <li id="chocoesp" class={styles.proyecto} onclick={open_ai}>Chocolate Espeso <span class={styles.type}>Produção</span> / 2026</li>
                {showAi() && (<Recent obj={recentapi.chocoesp}/>)}

                <li id="pipoca" class={styles.proyecto} onclick={open_Pipoca}>Pipoca <span class={styles.type}>Música</span> / 2026</li>
                {showPipoca() && (<Recent obj={recentapi.pipoca}/>)}

                <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa <span class={styles.type}>net art</span> / 2025</li>
                {showZhizwha() && (<Recent obj={recentapi.zhizhwa}/>)}

                <li id="gallery" class={styles.proyecto} onclick={open_Gallery}>Gallery <span class={styles.type}>Artes gráficas</span> / 2025 - 2026</li>
                {showGallery() && (<Recent obj={recentapi.gallery}/>)}                

                <li id="astronativo" class={styles.proyecto} onclick={open_Astronativo}>Astronativo <span class={styles.type}>Live Visuals</span> / 2024 - 2025</li>
                {showAstronativo() && (<Recent obj={recentapi.astronativo}/>)}
            </ul>
        </div>

    );

}
