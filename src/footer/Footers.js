import React from 'react';
import s from './Footers.module.css';
import sContainer from '../Common/styles/Container.module.scss'
import {Title} from "../Common/components/title/Title";

const Footers = React.memo(() => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Title title={'Boris Panich'}
                       titleDiscription={'future description'}
                />
                <div className={s.socialLinksBlock}>
                    <div className={s.socialLink}>1</div>
                    <div className={s.socialLink}>2</div>
                    <div className={s.socialLink}>3</div>
                    <div className={s.socialLink}>4</div>
                </div>
                <h4>@2020 All rights reserved Boris Panich</h4>
            </div>
        </div>
    )
})

export default Footers;