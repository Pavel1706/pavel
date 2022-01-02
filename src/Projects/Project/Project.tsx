import React from 'react';
import style from './Project.module.scss';

type ProjectType ={
    id:string
    photo: string
    name: string
    description: string
    background:  string

}
type AllProjectType={
    projectDescribe: Array<ProjectType>
}


export function Project(props:AllProjectType) {




    const seeProject=(projectId:string)=>{

            if(props.projectDescribe[0].id===projectId) {
                debugger
                window.location.href = 'http://Pavel1706.github.io/SocialNetWork'
            }
            if(props.projectDescribe[1].id===projectId){
                window.location.href='http://Pavel1706.github.io/appTodo'
            }

    }


    return (<>
    {props.projectDescribe.map(t=>
        <div key={t.id} className={style.project}>
            <div className={style.icon} style={{backgroundImage:t.background}}>
               <button type="submit" onClick={()=>{seeProject(t.id)}}>Push me</button> </div>

            <div className={style.secondMain}>
            <h3 className={style.projectTitle}>{t.name}</h3>
        <div className={style.description}>{t.description}</div>
            </div>
            </div>)}

        </>
)
}


