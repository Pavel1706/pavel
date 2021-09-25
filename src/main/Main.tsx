import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetings}>
                    <span>Hello there</span>
                    <h1> I'm Radzishevskii Pavel</h1>
                    <p>Frontend-end Developer.</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}


