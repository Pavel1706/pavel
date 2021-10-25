import React from 'react';

import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";


export function Contacts() {


    return <div className={`${styleContainer.container} ${style.head}`}>
        <div className={style.main}>
            <div className={style.description}>Contacts</div>
            <form className={style.form}>
                <input className={style.input}/>
                <input className={style.inputSend}/>
                <textarea className={style.text}/>
                <button type="submit" className={style.button}>Send</button>
            </form>
        </div>
    </div>

}



