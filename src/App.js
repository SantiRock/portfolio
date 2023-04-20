import { useState } from 'react';
import './App.css';
import Head from './js/head.js';
import LangApp from './js/body'
import { acerca, about } from './js/about';
import { projects, proyectos } from './js/projects';


const App = () => {
  const [showHead, setShowHead] = useState( about )
  const [showBody, setShowBody] = useState( projects )


  const handlerEn = (event) => {
    event.preventDefault();
    setShowHead(about)
    setShowBody(projects)
  }

  const handlerEs = (event) => {
    event.preventDefault();
    setShowHead(acerca)
    setShowBody(proyectos)
  }

  return (
    <>
      <Head arr={showHead} handlerEn={handlerEn} handlerEs={handlerEs}/>
      <LangApp arr={showBody} />
    </>
  );
}

export default App;
