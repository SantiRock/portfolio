import React, { useState, useEffect } from 'react';
import myImage from '../images/df1.png';

const Image = () => <img className='img' src={myImage} alt='Santiago'/>

const Head1 = () => {
    return (
        <>
            <div className="header">
                <Image />
                <div>
                    <h1>Santiago Quintero Portfolio</h1>
                    <p className="n"><i>Developped with React</i></p>
                </div>
            </div>

            <section className="about">
                <h2>About</h2>
                <p>With a background in visual arts, 
                I am currently in a career transition to web development.
                Strong creative and analytical skills. Team player with an eye for detail. 
                JavaScript, CSS, HTML, currently learning REACT.</p>
            </section> 
        </>
    )
}

const Head2 = () => {
    return (
        <>
            <div className="header">
                <Image />
                <div>
                    <h1>Santiago Quintero Portfolio</h1>
                    <p className="n"><i>Developped with React</i></p>
                
                    <section className="about">
                        <h2>About</h2>
                        <p>With a background in visual arts, 
                        I am currently in a career transition to web development.
                        Strong creative and analytical skills. Team player with an eye for detail. 
                        JavaScript, CSS, HTML, currently learning REACT.</p>
                    </section> 
                </div>
            </div>

            
        </>
    )
}

const Head = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {windowWidth < 627 ? (
                <Head1 />
            ) : (
                <Head2 />
            )}
        </>
    )
}

export default Head
