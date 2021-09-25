import React from 'react';
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";





export function Footer() {



    return <div className={`${styleContainer.container} ${style.head}`}>
        <div className={style.main}>
        <h3 className={style.description}>Pavel Radzishevskii</h3>
            <div className={style.menu}>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
            </div>
        <h5 className={style.footer}>
            Copyright ©  2021 All rights reserved</h5>
        </div>
    </div>

}



