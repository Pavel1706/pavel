import React from 'react';
import style from './Button.module.scss'


type ButtonType={
    text:string
}

export function Button(props:ButtonType){
    return (
        <a href="" className={style.btn}>{props.text}</a>
    )
}