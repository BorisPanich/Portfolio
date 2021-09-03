import React from 'react';
import s from './WorkingConditions.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import {Button} from "../Common/components/button/Button";
import {Title} from "../Common/components/title/Title";

function WorkingConditions() {
    return (
        <div className={s.workingBlock}>
            <div className={`${sContainer.container} ${s.workingContainer}`}>
                <Title title={'Сonsidering work options'}
                       titleDiscription={'future description'}
                />
                <Button name={'Hire me'}/>
            </div>
        </div>
    )
}

export default WorkingConditions;