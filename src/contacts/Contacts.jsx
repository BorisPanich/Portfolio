import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.contactsTitle}>Contacts</h2>
                <form className={style.contactForm}>
                    <input type="text" value="input 1"/>
                    <input type="text" value="input 2"/>
                    <textarea />
                    <button type="submit" className={style.submitButton}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;