import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skill</a>
            <a href="">Project</a>
            <a href="">Contact</a>
            <a href="">Home</a>
        </div>
    )
}

export default Nav;