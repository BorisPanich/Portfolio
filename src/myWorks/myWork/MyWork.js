import React from 'react';
import s from './MyWork.module.css';
import {Button} from "../../Common/components/button/Button";

function MyWork({projectName, description, ...props}) {
    return (
        <div className={s.workBlock}>
            <div className={s.projectImg}>
                <Button name={'Watch'} />
            </div>
            <div className={s.description}>
                <h3>{projectName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MyWork;