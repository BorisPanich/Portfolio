import React from 'react';
import s from './WorkingConditions.module.scss';
import {Button} from "../Common/components/button/Button";
import {Title} from "../Common/components/title/Title";
import Fade from 'react-reveal/Fade';

function WorkingConditions() {
    return (
        <div className={s.workingBlock}>
            <div className={s.container}>
                <Fade left>
                    <Title title={'Сonsidering work options'}
                           titleDiscription={'future description'}
                    />
                    <Button name={'Hire me'} className={s.workingBtn}/>
                </Fade>
            </div>
        </div>
    )
}

export default WorkingConditions;