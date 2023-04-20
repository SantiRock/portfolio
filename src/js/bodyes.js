import { useState } from 'react';
import { proyectos } from './projectsbeta';

const Btn = ( {text, handler} ) => <button className='btn' onClick={handler}>{text}</button>

const Project = ( {link, name, tecnologies, description, role, year } ) => {
  return (
    <div className='project'>
      <a href={link} target="_blank">
        <h3>{name}</h3>
        <p className='techs'>- {tecnologies.join(', ')}</p>
        <p><b>Role:</b> {role}</p>
        <p><b>Year:</b> {year}</p>
        <p>{description}</p>
      </a>
    </div>
  )
}

const Projects = ( {showAll} ) =>
showAll.map(({link, name, tecnologies, description, role, id, year}) =>
<Project key={id} link={link} name={name} tecnologies={tecnologies} description={description} role={role} year={year}/>)


const EsApp = ({}) => {
  const [showAll, setShowAll] = useState(proyectos)

  const jsBtn = (event) => {
    event.preventDefault();
    setShowAll(proyectos.filter(project => project.tags === 'javascript'))
  }

  const reactBtn = (event) => {
    event.preventDefault();
    setShowAll(proyectos.filter(project => project.tags === 'react'))
  }

  const htmlBtn = (event) => {
    event.preventDefault();
    setShowAll(proyectos.filter(project => project.tags === 'html'))
  }

  const allBtn = (event) => {
    event.preventDefault();
    setShowAll(proyectos)
  }


  return (
    <section className='prss'>
      <h2>Proyectos</h2>
      <div className='btns'>
        <Btn text='React' handler={reactBtn}/>
        <Btn text='JavaScript' handler={jsBtn}/>
        <Btn text='HTML & CSS' handler={htmlBtn}/>
        <Btn text='Todos' handler={allBtn}/>
      </div>
      <div className='projects'>
        <Projects showAll={showAll}/>
      </div>
    </section>

  );
}

export default EsApp;