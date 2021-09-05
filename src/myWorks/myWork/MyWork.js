import React from 'react';
import s from './MyWork.module.scss';
import {Button} from "../../Common/components/button/Button";

const MyWork = React.memo(({projectName, description, link, repLink, ...props}) => {
    return (
        <article className={s.workItem}>
            <div className={s.workBlock}>
                <div className={s.projectImg} style={props.style}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button className={s.projectBtn} button link={'https://vk.com/id19688828'}>Watch</Button>
                    </a>
                </div>
                <div className={s.description}>
                    <h3>{projectName}</h3>
                    <p>{description}</p>
                    <a href={repLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </article>
    )
})

export default MyWork;