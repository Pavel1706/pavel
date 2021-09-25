import React from 'react';
import style from './Skill.module.css';

type SkillType ={
    id:string
    title:string
    text: string
}
type AllSkillType={
    skillDescribe: Array<SkillType>
}


export function Skill(props:AllSkillType) {


    return<div className={style.main}>{props.skillDescribe.map(t=>
        <div key={t.id} className={style.skill}>
        <div className={style.icon}>0</div>
                <h3>{t.title}</h3>
                <span className={style.description}>{t.text}</span>

            </div>)}
    </div>

}


