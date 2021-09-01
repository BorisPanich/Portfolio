import React from 'react';
import s from './MyWork.module.css';

function MyWork({projectName, description, ...props}) {
    return (
        <div className={s.workBlock}>
            <div className={s.projectImg}>
                <button className={s.watchButton}>Watch it</button>
            </div>
            <div className={s.description}>
                <h3>{projectName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MyWork;