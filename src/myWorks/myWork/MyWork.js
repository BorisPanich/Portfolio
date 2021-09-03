import React from 'react';
import s from './MyWork.module.css';
import {Button} from "../../Common/components/button/Button";

const MyWork = React.memo(({projectName, description, ...props}) => {
    return (
        <div className={s.workItem}>
            <div className={s.singleProject}>
                <div className={s.projectImg}>
                    <Button name={'Watch'}/>
                </div>
                <div className={s.description}>
                    <h3>{projectName}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
})

export default MyWork;