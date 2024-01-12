import React, { useState, useEffect } from 'react';
import myImage from '../images/df1.png';

const Image = () => <img className='img' src={myImage} alt='Santiago'/>

const Btn = ( {text, handler} ) => <button className='btn1' onClick={handler}>{text}</button>

const Titlee = ( {title, subtitle} ) => {
    return (
        <div>
            <h1>{title}</h1>
            <p className="n"><i>{subtitle}</i></p>
        </div>
    )
}

const Aboutt = ( {aboutTitle, about}) => {
    return (
        <section className='about'>
            <h2>{aboutTitle}</h2>
            <p>{about}</p>
        </section>
    )
}


const Head1 = ( {arr, handlerEs, handlerEn} ) => {
    return (
        <>
            <div className='btns1'>
                <Btn text='English' handler={handlerEn}/>
                <Btn text='Español' handler={handlerEs}/>
            </div>
            
            <div className="header">
                <Titlee title={arr.title} subtitle={arr.subTitle} />
             
            </div>
            <Aboutt aboutTitle={arr.aboutTitle} about={arr.about}/>
        </>
    )
}

const Head2 = ({arr, handlerEs, handlerEn}) => {
    return (
        <>           
            <div className="header">
                <div className='headc'>
                    <div className='headd'>
                        <h1>{arr.title}</h1>
                        <div className='btns1'>
                            <Btn text='English' handler={handlerEn}/>
                            <Btn text='Español' handler={handlerEs}/>
                        </div>
                    </div>
                    
                    <p className="n"><i>{arr.subTitle}</i></p>
                    <Aboutt aboutTitle={arr.aboutTitle} about={arr.about}/>              
                </div>
            </div>

            
        </>
    )
}

const Head = ({arr, handlerEn, handlerEs}) => {
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
                <Head1 arr={arr} handlerEn={handlerEn} handlerEs={handlerEs} />
            ) : (
                <Head2 arr={arr} handlerEn={handlerEn} handlerEs={handlerEs}/>
            )}
        </>
    )
}

export default Head
