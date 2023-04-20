import { useState } from 'react';

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


const LangApp = ({arr}) => {
  const proj = arr[0].projects
  const [showAll, setShowAll] = useState(proj)

  const jsBtn = (event) => {
    event.preventDefault();
    setShowAll(proj.filter(project => project.tags === 'javascript'))
  }

  const reactBtn = (event) => {
    event.preventDefault();
    setShowAll(proj.filter(project => project.tags === 'react'))
  }

  const htmlBtn = (event) => {
    event.preventDefault();
    setShowAll(proj.filter(project => project.tags === 'html'))
  }

  const allBtn = (event) => {
    event.preventDefault();
    setShowAll(proj)
  }


  return (
    <section className='prss'>
      <h2>{arr[0].title}</h2>
      <div className='btns'>
        <Btn text='React' handler={reactBtn}/>
        <Btn text='JavaScript' handler={jsBtn}/>
        <Btn text='HTML & CSS' handler={htmlBtn}/>
        <Btn text={arr[0].all} handler={allBtn}/>
      </div>
      <div className='projects'>
        <Projects showAll={showAll}/>
      </div>
    </section>

  );
}

export default LangApp;