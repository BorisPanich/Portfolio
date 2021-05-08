import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.text}`}>
                <div className={style.contactsTitle}>Contacts</div>
                <div className={style.input_textarea}>
                    <div>
                        <input type="text" value="input 1"/>
                    </div>
                    <div>
                        <input type="text" value="input 2"/>
                    </div>
                    <textarea name="" id="" cols="5" rows="5">

                    </textarea>
                </div>
                <div>
                    <button className={style.conctsButton}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Contacts;