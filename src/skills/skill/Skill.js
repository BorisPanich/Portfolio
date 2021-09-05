import React from 'react';
import s from './Skill.module.scss';

const Skill = React.memo(({icon, title, discription}) => {
    return (
        <div className={s.skillItem}>
            <div className={s.skillBlock}>
                <div className={s.wrapper}>
                    <div className={s.icon}>
                        <img src={icon} alt=""/>
                    </div>
                    <h3>{title}</h3>
                    <p>{discription}</p>
                </div>
            </div>
        </div>
    )
})

export default Skill;