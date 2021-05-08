import React from 'react';
import style from './WorkingConditions.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'

function WorkingConditions() {
    return (
        <div className={style.workingBlock}>
            <div className={`${styleContainer.container} ${style.text}`}>
                <h1 className={style.title}>First of all, I consider options for remote work</h1>
                <a className={style.title} href={""}>Hire me</a>
            </div>

        </div>
    )
}

export default WorkingConditions;