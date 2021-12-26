import React from 'react';
import style from "./Contacts.module.scss";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";


export function Contacts() {
    // return <div className={`${styleContainer.container} ${style.head}`}>
    return <div id='contacts' className={style.contactsBlock}>
        <div className={style.container}>
            <Title text={'Contacts'}/>
            <Fade delay={1000}>
            <form className={style.form}>
                <input type="text" className={style.formArea} placeholder='Name'/>
                <input type="text" className={style.formArea} placeholder='e-mail'/>
                <textarea className={style.messageArea} placeholder='Message'/>
                {/*<button type="submit" className={style.button}>Send</button>*/}
                {/*<Button  text={'Send'}/>*/}
                <button type="submit" >Send</button>
            </form>
            </Fade>
        </div>
    </div>

}



