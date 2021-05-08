import React from 'react';
import style from './Main.module.css';
import My_foto from './../Common/Foto/My_foto.jpg'
import styleContainer from './../../src/Common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}>
                    {/*<img src={My_foto}/>*/}
                </div>
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