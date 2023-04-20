import { useState } from 'react';
import './App.css';
import Head from './js/head.js';
import LangApp from './js/body';
import EsApp from './js/bodyes';

import { acerca, about } from './js/about';
import { projects, proyectos } from './js/projects';


const App = () => {
  const [showHead, setShowHead] = useState( about )
  const [currentComponent, setCurrentComponent] = useState( <LangApp arr={projects}/> )


  const handlerEn = (event) => {
    event.preventDefault();
    setShowHead(about)
    setCurrentComponent(<LangApp arr={projects}/>)
  }

  const handlerEs = (event) => {
    event.preventDefault();
    setShowHead(acerca)
    setCurrentComponent(<EsApp arr={proyectos}/>)
  }

  return (
    <>
      <Head arr={showHead} handlerEn={handlerEn} handlerEs={handlerEs}/>
      {currentComponent}
    </>
  );
}

export default App;
