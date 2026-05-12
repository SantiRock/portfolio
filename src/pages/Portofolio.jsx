import { createSignal } from 'solid-js';
import styles from '../App.module.css';
import { Recientes, rc } from '../components/recientes/Recientes';
import { Prod, pc } from '../components/prod/Prod';
import { Video, vc } from '../components/video/Video';
import { Movies, mc } from '../components/movies/Movies';
import { Sound, sc } from '../components/sound/Sound';
import { Web, wc } from '../components/code/Web';
import { Espacios, ec } from '../components/espacios/Espacios';

export function Portofolio() {
  const [showProd, setShowProd] = createSignal(false);
  const [showVideo, setShowVideo] = createSignal(false);
  const [showMovies, setShowMovies] = createSignal(false);
  const [showSound, setShowSound] = createSignal(false);
  const [showWeb, setShowWeb] = createSignal(false);
  const [showEspacios, setShowEspacios] = createSignal(false);
  const [showRecientes, setShowRecientes] = createSignal(true);

  const open_Prod = () => {
      setShowProd(prev => !prev);
  }

  const open_Video = () => {
    setShowVideo(prev => !prev); 
  }

  const open_Movies = () => {
    setShowMovies(prev => !prev);
  }

  const open_Sound = () => {
    setShowSound(prev => !prev);
  }

  const open_Web = () => {
    setShowWeb(prev => !prev);
  }

  const open_Espacios = () => {
    setShowEspacios(prev => !prev);
  }

  const open_Recientes = () => {
    setShowRecientes(prev => !prev);
  }

  return (
    <div class={styles.container1}>
      <div class={styles.main}>
        <p class={styles.msn1}>Os projetos estão divididos por seções. Basta clicar na seção e depois no nome do projeto para expandi-lo.</p>
        <p class={styles.msn2}>Você pode fechá-lo da mesma forma.</p>

        <h3 id="recientes" onclick={open_Recientes}>Projetos em destaque <span class={styles.cant}>({rc})</span></h3>
        {showRecientes() && (<Recientes />)}

        <h3 id="prod" onclick={open_Prod}>Produção de eventos <span class={styles.cant}>({pc})</span></h3>
        {showProd() && (<Prod />)}

        <h3 id="spaces" onclick={open_Espacios}>Espaços e Associações <span class={styles.cant}>({ec})</span></h3>
        {showEspacios() && (<Espacios />)}
       
        <h3 id="video" onclick={open_Video}>Live Visuals <span class={styles.cant}>({vc})</span></h3>
        {showVideo() && (<Video />)}

        <h3 id="movies" onclick={open_Movies}>Filmografia <span class={styles.cant}>({mc})</span></h3>
        {showMovies() && (<Movies />)}

        <h3 id="sound" onclick={open_Sound}>Som e música <span class={styles.cant}>({sc})</span></h3>
        {showSound() && (<Sound />)}

        <h3 id="web" onclick={open_Web}>Web <span class={styles.cant}>({wc})</span></h3>
        {showWeb() && (<Web />)}
      </div>
    </div>
  );
}

