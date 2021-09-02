import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import {Button} from "../Common/components/button/Button";

function Contacts() {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Contact</h2>
                <form className={s.contactForm}>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label htmlFor="larea">Your message:</label><br/>
                    <textarea type="text" id="larea" name="larea"/>
                </form>
                <Button name={'Send'}/>
            </div>
        </div>
    )
}

export default Contacts;