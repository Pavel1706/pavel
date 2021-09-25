import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


type SkillDescribeType={
    id:string
    title: string
    text: string
}

export function Skills() {

    let skillDescribe: Array<SkillDescribeType>=[
        {id:'1', title:'JS', text: 'I know him'},
        {id:'2', title:'CSS', text: 'I know him'},
        {id:'3', title:'TypeScript', text: 'It`s piece of cake'},
    ]

    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skillDescribe={skillDescribe} />
                </div>
            </div>
        </div>
    );
}



