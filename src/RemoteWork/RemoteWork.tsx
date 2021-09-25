import React from 'react';

import style from "./RemoteWork.module.css";
import styleContainer from "../common/styles/Container.module.css";





export function RemoteWork() {



    return <div className={`${styleContainer.container} ${style.head}`}>
        <div className={style.main}>
        <div className={style.description}>You wont`t believe it, I can remote work</div>
        <div className={style.button}>
            <a >Call me</a></div>
        </div>
    </div>

}



