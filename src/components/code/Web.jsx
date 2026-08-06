import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { webapi } from "./webapi";

export const wc = Object.keys(webapi).length;

function Site ({obj}) {
  return(
    <div class={`${styles.container} ${styles.cp}`} >
      <h4 class={styles.title}>{obj.title}</h4>
      <p><span class={styles.bold}>Data:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Conceito:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Stack:</span> {obj.stack}</p>
      <p class={styles.bold}>Links:</p> 
      <ul class={styles.ul}>
        {obj.enlaces.map(({id, enlace, text}) => (
          <li key={id}><a href={enlace} target="_blank">{text}</a></li>
        ))}
      </ul>
    </div>
  )
}

export function Web () {
  const [showZhizhwa, setShowZhizhwa] = createSignal(false);
  const [showAigallery, setShowAigallery] = createSignal(false);
  const [showMd, setShowMd] = createSignal(false);
  const [showPlayground, setShowPlayground] = createSignal(false);
  const [showCacao, setShowCacao] = createSignal(false);

  const open_Aigallery = () => {
    setShowAigallery(prev => !prev);
  };

  const open_Zhizhwa = () => {
    setShowZhizhwa(prev => !prev);
  };

  const open_Md = () => {
    setShowMd(prev => !prev);
  };

  const open_Playground = () => {
    setShowPlayground(prev => !prev);
  };

  const open_Cacao = () => {
    setShowCacao(prev => !prev);
  };

  const pc = webapi.playground.enlaces.length
  const mdc = webapi.md.enlaces.length

  return(
    <div class={styles.container}>
      <ul>
        <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa / 2025</li>
        {showZhizhwa() && (<Site obj={webapi.zhizhwa}/>)}

        <li id="aigallery" class={styles.proyecto} onclick={open_Aigallery}>Gallery / 2025</li>
        {showAigallery() && (<Site obj={webapi.aigallery}/>)}

        <li id="md" class={styles.proyecto} onclick={open_Md}>Material Didático / 2024 - 2026 ({mdc})</li>
        {showMd() && (<Site obj={webapi.md}/>)}

        <li id="playground" class={styles.proyecto} onclick={open_Playground}>Playground / 2022 - 2024 ({pc})</li>
        {showPlayground() && (<Site obj={webapi.playground}/>)}

        <li id="chocoesp" class={styles.proyecto} onclick={open_Cacao}>Chocolate Espeso / 2026</li>
        {showCacao() && (<Site obj={webapi.chocoesp}/>)}
      </ul>
    </div>  
  );
}