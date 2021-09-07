import React from 'react';
import s from './Contacts.module.scss';
import {Button} from "../Common/components/button/Button";
import {Title} from "../Common/components/title/Title";
import Fade from 'react-reveal/Fade';
// import axios from "axios";
// import {useForm} from "react-hook-form";

const Contacts = React.memo(() => {
    return (
        <div className={s.contactBlock}>
            <div className={s.container}>
                <Fade right>
                    <Title title={'Contact'}
                           titleDiscription={'future description'}
                    />
                    <div className={s.formWrapper}>
                        <form className={s.contactForm}>
                            <input type="text" id="fname" name="fname" placeholder={'Your First Name'}/>
                            <input type="text" id="lname" name="lname" placeholder={'Your Last Name'}/>
                            <textarea type="text" id="larea" name="larea" placeholder={'Your Message'}/>
                        </form>
                        <Button type="submit"
                                newStyle
                                button
                            // disabled={!!notification.flag}
                                className={s.contactBtn}
                        >Send message</Button>
                    </div>
                </Fade>
            </div>
        </div>
    )
})

export default Contacts;