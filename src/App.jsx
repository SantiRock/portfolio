import { createSignal } from 'solid-js';
import styles from './App.module.css';
import { Portofolio } from './pages/Portofolio'
import { Home } from './pages/Home'
import { About } from './pages/about/About';
import { Footer } from './pages/footer/Footer';
import { ShaderBackground } from './components/shaderbackground/ShaderBackground';

function App() {
  const [showHome, setShowHome] = createSignal(true);
  const [showPortofolio, setShowPortofolio] = createSignal(false);

  const sobreClick = () => {
    setShowHome(true);
    setShowPortofolio(false);
  }

  const portClick = () => {
    setShowHome(false);
    setShowPortofolio(true);
  }
 
  return (
    <>
    <ShaderBackground />
    <div class={styles.container}>
      <About sobreClick={sobreClick} portClick={portClick}/>
      <main>
        {showHome() && <Home />}
        {showPortofolio() && <Portofolio />}
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
