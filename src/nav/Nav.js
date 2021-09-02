import React from 'react';
import s from './Nav.module.css';

const Nav = React.memo(() => {
    return (
        <div className={s.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contact</a>
            <a href="">Home</a>
        </div>
    )
})

export default Nav;