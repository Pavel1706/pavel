import React from 'react';

import style from "./RemoteWork.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";





export function RemoteWork() {
    return <div className={`${styleContainer.container} ${style.head}`}>
        <div className={style.main}>
        <Title text={`I can perform work remotely`}/>
            <button type="submit" >Call me</button>
            {/*<Button text={'Call me'}/>*/}
        </div>
    </div>

}



