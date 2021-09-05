import React from 'react';
import s from './Main.module.scss';
import My_foto from '../assets/images/My_foto.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const Main = React.memo(() => {
    const myFoto = {
        backgroundImage: `url(${My_foto})`
    }

    return (
        <div className={s.mainBlock} id='main'>
            <div className={s.container}>
                <div style={myFoto} className={s.photo}></div>
                <Fade clear>
                    <div className={s.greeting}>
                <span className={s.profession}>
                   <ReactTypingEffect text={['<Front-end developer/']}
                                      speed={100}
                                      eraseSpeed={10}
                                      cursor={'>'}
                   />
                </span>
                        <h1>Hello, I'm <span className={s.name}>Boris</span><br/>
                            Welcome to my World.</h1>
                    </div>
                </Fade>
            </div>
        </div>
    )
})

export default Main;