import React from 'react';
import s from './Footers.module.scss';
import Fade from 'react-reveal/Fade';
import socialIn from './../assets/images/footer/icons8-linkedin-2.svg';
import socialVk from './../assets/images/footer/icons8-vkontakte.svg';
import socialInst from './../assets/images/footer/icons8-instagram.svg';

const Footers = () => {

    return (
        <footer className={s.footerWrapper}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.innerText}>
                        <ul className={s.socialShare}>
                            <Fade bottom>
                                <li>
                                    <a href="https://vk.com/id19688828" target="_blank" rel="noopener noreferrer">
                                        <img src={socialVk} alt=""/>
                                    </a>
                                </li>
                            </Fade>
                            <Fade bottom>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={socialInst} alt=""/>
                                    </a>
                                </li>
                            </Fade>
                            <Fade bottom>
                                <li>
                                    <a href="https://www.linkedin.com/in/boris-panich-10157b1a8/" target="_blank" rel="noopener noreferrer">
                                        <img src={socialIn} alt=""/>
                                    </a>
                                </li>
                            </Fade>
                        </ul>
                    </div>
                    <p>© 2021. All rights reserved by Boris Panich</p>
                </div>
            </div>
        </footer>
    )
}

export default Footers;