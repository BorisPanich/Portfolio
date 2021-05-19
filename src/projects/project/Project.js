import React from 'react';
import style from './Project.module.scss';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.picture} style={props.style} >
                <button className={style.clickUrl}>Watch it</button>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.descriptionText}>{props.discription}</span>
            <a href=""></a>
        </div>
    )
}

export default Project;