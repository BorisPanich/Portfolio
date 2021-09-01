import React from 'react';
import s from './WorkingConditions.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'

function WorkingConditions() {
    return (
        <div className={s.workingBlock}>
            <div className={`${sContainer.container} ${s.workingContainer}`}>
                <h2 className={s.title}>Сonsidering work options</h2>
                <button className={s.hireButton}>Hire me</button>
            </div>
    </div>
    )
}

export default WorkingConditions;