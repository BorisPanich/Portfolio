import React from 'react';
import s from './WorkingConditions.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import {Button} from "../Common/components/button/Button";

function WorkingConditions() {
    return (
        <div className={s.workingBlock}>
            <div className={`${sContainer.container} ${s.workingContainer}`}>
                <h2 className={s.title}>Сonsidering work options</h2>
                <Button name={'Hire me'} />
            </div>
    </div>
    )
}

export default WorkingConditions;