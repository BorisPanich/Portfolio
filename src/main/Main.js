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
                    <span className={s.profession}>Front-end developer</span>
                    <h1>Hello, I'm <span className={s.name}>Boris</span> Welcome to my World.</h1>
                </div>
            </div>
        </div>
    )
})

export default Main;