import './App.css';
import LangApp from './js/bodyen';
import Head from './js/head.js';
import EnApp from './js/bodyen';
import EsApp from './js/bodyes';
import { acerca, about } from './js/about';

import { useState } from 'react';

const PreApp = ( {arr, handlerEn, handlerEs} ) => {
  return (
    <>
      <Head arr={arr.arr1} handlerEn={handlerEn} handlerEs={handlerEs}/>
      <EnApp />
    </>
  )
}


const App = () => {
  const arrEn = {arr1: about}
  const arrEs = {arr1: acerca}
  const [toShow, setToShow] = useState( arrEn )

  const handlerEn = (event) => {
    event.preventDefault();
    setToShow(arrEn)
  }

  const handlerEs = (event) => {
    event.preventDefault();
    setToShow(arrEs)
  }


  return (
    <PreApp arr={toShow} handlerEn={handlerEn} handlerEs={handlerEs}/>
  );
}

export default App;
