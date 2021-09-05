import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../Common/styles/Container.module.scss'
import {Button} from "../Common/components/button/Button";
import {Title} from "../Common/components/title/Title";

const Contacts = React.memo(() => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <Title title={'Contact'}
                       titleDiscription={'future description'}
                />
                <form className={s.contactForm}>
                    <input type="text" id="fname" name="fname" placeholder={'Your First Name'}/>
                    <input type="text" id="lname" name="lname" placeholder={'Your Last Name'}/>
                    <textarea type="text" id="larea" name="larea" placeholder={'Your Message'}/>
                </form>
                <Button name={'Send message'}
                        className={s.contactBtn}
                        newStyle
                        button
                />
            </div>
        </div>
    )
})

export default Contacts;