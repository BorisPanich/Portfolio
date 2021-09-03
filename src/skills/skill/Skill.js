import React from 'react';
import s from './Skill.module.css';

const Skill = React.memo((props) => {
    return (
        <div className={s.skillItem}>
            <div className={s.skillBlock}>
                <div className={s.icon}></div>
                <h3>{props.title}</h3>
                <p>{props.discription}</p>
            </div>
        </div>
    )
})

export default Skill;