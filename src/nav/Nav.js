import React from 'react';
import s from './Nav.module.css';

const Nav = React.memo(() => {
    return (
        <div className={s.nav}>
            <nav className={s.navbar}>
                <ul className={s.mainMenu}>
                    <li className={s.menuItem}>
                        <a href="">Main</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href="">Skills</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href="">Projects</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href="">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
})

export default Nav;