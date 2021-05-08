import React from 'react';
import style from './Footers.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'
import FooterItem from "./footerItem/FooterItem";

function Footers() {
    return (
        <div className={style.footersBlock}>
            <div className={`${styleContainer.container} ${style.footersContainer}`}>
                <h2 className={style.title}>Boris Panich</h2>
                <div className={style.footers}>
                    <FooterItem discription={"My Project 1"}/>
                    <FooterItem discription={"My Project 2"}/>
                    <FooterItem discription={"My Project 3"}/>
                    <FooterItem discription={"My Project 4"}/>
                </div>
                <div className={style.lowerFooter}>2021 All rights reserved</div>
            </div>
        </div>
    )
}

export default Footers;