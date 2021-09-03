import React from 'react';
import s from './Header.module.css';
import Nav from "../nav/Nav";
import sContainer from './../../src/Common/styles/Container.module.css';

const Header = React.memo(() => {
    return (
        <div className={s.headerArea}>
            <div className={sContainer.container}>
                <div className={s.headerWrapper}>
                    <div className={s.headerLeft}>
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Header;