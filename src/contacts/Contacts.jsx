import React from 'react';
import s from './Contacts.module.scss';
import {Button} from "../Common/components/button/Button";
import {Title} from "../Common/components/title/Title";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import {useForm} from 'react-hook-form';

const Contacts = React.memo(() => {
    // let [notification, setNotification] = React.useState({flag: false, message: ''})
    //
    // const {register, handleSubmit, errors, setError} = useForm();
    //
    // const onSubmit = async (data, e) => {
    //
    //     e.target.reset()
    //     try {
    //         await axios.post('https://floating-sands-77642.herokuapp.com/sendPost', data)
    //         setNotification({flag: true, message: 'The message was sent successfully. Thanks!'})
    //         setTimeout(() => {
    //             setNotification({flag: false, message: ''})
    //         }, 5000)
    //     } catch (err) {
    //         setError('username', 'validate');
    //         setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
    //         setTimeout(() => {
    //             setNotification({flag: false, message: ''})
    //         }, 5000)
    //     }
    // };

    return (
        <div className={s.contactBlock} id='contacts'>
            <div
                className={s.messageSuccess}
                // style={{opacity: notification.flag ? '1' : ''}}
            >
                {/*<span>{notification.message}</span>*/}
            </div>
            <div className={s.container}>
                <Fade clear>
                    <Title title={'Contact'}
                           titleDiscription={'future description'}
                    />
                    <div className={s.formWrapper}>
                        <form
                            // onSubmit={handleSubmit(onSubmit)}
                            className={s.contactForm}>
                            <input name="email"
                                   type="text"
                                   placeholder={'Email'}
                                // ref={register({
                                //     required: 'This is required',
                                //     pattern: {
                                //         value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                //         message: 'Invalid email address',
                                //     },
                                // })}
                            />
                            {/*{errors.email && <span className={s.notificationEmail}>{errors.email.message}</span>}*/}
                            <input name="name"
                                   type="text"
                                   placeholder={'Name'}
                                // ref={register({
                                //     required: true,
                                //     validate: value => value.length >= 2
                                // })}
                            />
                            {/*{*/}
                            {/*    errors.name &&*/}
                            {/*<span className={s.notificationName}>Your last name is less than 2 characters</span>*/}
                            {/*}*/}
                            <textarea name="message"
                                      placeholder={'Message'}
                                // ref={register}
                            />
                            <Button type="submit"
                                    newStyle
                                    button
                                // disabled={!!notification.flag}
                                    className={s.contactBtn}
                            >Send message</Button>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    )
})

export default Contacts;