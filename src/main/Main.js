import React from 'react';
import s from './Main.module.css';
import My_foto from '../assets/images/My_foto.jpg'
import sContainer from './../../src/Common/styles/Container.module.css'

const Main = React.memo(() => {
    const myFoto = {
        backgroundImage: `url(${My_foto})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div style={myFoto} className={s.photo}></div>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I'm Boris</h1>
                    <p>Front-End Developer!</p>
                </div>
            </div>
        </div>
    )
})

export default Main;