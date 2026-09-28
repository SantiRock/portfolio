import { createSignal } from "solid-js";
import { recentapi } from "./recienteapi";
import { Images } from "../images/Images";
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
          {obj.images && (<Images obj={obj}/>)}
        </>
      )}
    </div>
    )
}

export function Recientes () {
    const [showAv8, setShowAv8] = createSignal(false);
    const [showCacao, setShowCacao] = createSignal(false);
    const [showZhizwha, setShowZhizwha] = createSignal(false);
    const [showGallery, setShowGallery] = createSignal(false);

    const open_av8 = () => {
        setShowAv8(prev => !prev);
    }

    const open_Cacao = () => {
        setShowCacao(prev => !prev);
    }

    const open_Zhizhwa = () => {
        setShowZhizwha(prev => !prev);
    }

    const open_Gallery = () => {
        setShowGallery(prev => !prev);
    }

    return(
        <div class={styles.container}>
            <ul>
                <li id="av8" class={styles.proyecto} onclick={open_av8}>AV8 <span class={styles.type}>Arte Digital</span> / 2026</li>
                {showAv8() && (<Recent obj={recentapi.av8}/>)}    

                <li id="chocoesp" class={styles.proyecto} onclick={open_Cacao}>Chocolate Espeso <span class={styles.type}>Produção</span> / 2026</li>
                {showCacao() && (<Recent obj={recentapi.chocoesp}/>)}

                <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa <span class={styles.type}>Net Art</span> / 2025</li>
                {showZhizwha() && (<Recent obj={recentapi.zhizhwa}/>)}

                <li id="gallery" class={styles.proyecto} onclick={open_Gallery}>Gallery <span class={styles.type}>Artes gráficas</span> / 2025 - 2026</li>
                {showGallery() && (<Recent obj={recentapi.gallery}/>)}
            </ul>
        </div>

    );

}
