import React from 'react';
import style from './Project.module.css';

type ProjectType ={
    id:string
    photo: string
    name: string
    description: string
    background:   string
}
type AllProjectType={
    projectDescribe: Array<ProjectType>
}


export function Project(props:AllProjectType) {


    return (<>
    {props.projectDescribe.map(t=>
        <div key={t.id} className={style.project}>
            <div className={style.icon} style={{backgroundImage:t.background}}>
            <a className={style.button}>push</a></div>
            <div className={style.secondMain}>
            <h3 className={style.projectTitle}>{t.name}</h3>
        <div className={style.description}>{t.description}</div>
            </div>
            </div>)}

        </>
)
}


