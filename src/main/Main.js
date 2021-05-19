import React from 'react';
import style from './Main.module.css';
import My_foto from '../assets/images/My_foto.jpg'
import styleContainer from './../../src/Common/styles/Container.module.css'

function Main() {
    const myFoto = {
        backgroundImage: `url(${My_foto})`
    }

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div style={myFoto} className={style.photo}></div>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>My name is Boris Panich</h1>
                    <p>I'm Front-End Developer!</p>
                </div>
            </div>
        </div>
    )
}

export default Main;