import React from 'react';
import style from './Project.module.css';

type ProjectType ={
    id:string
    photo: string
    name: string
    description: string
}
type AllProjectType={
    projectDescribe: Array<ProjectType>
}


export function Project(props:AllProjectType) {


    return (<>
    <div className={style.main}>{props.projectDescribe.map(t=>
        <div key={t.id} className={style.project}>
            <div className={style.icon}>
            <a className={style.button}>push</a></div>
            <div className={style.secondMain}>
            <div className={style.name}>{t.name}</div>
        <div className={style.description}>{t.description}</div>
            </div>
            </div>)}
    </div>
        </>
)
}


