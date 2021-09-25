import React from 'react';
import style from './Projects.module.css';
import {Project} from "./Project/Project";
import styleContainer from "../common/styles/Container.module.css";



type ProjectType={
    id:string
    photo: string
    name: string
    description: string
}

export function Projects() {

    let projectDescribe: Array<ProjectType>=[
        {id:'1', photo:'JS', name: 'Social network', description: 'It was half year ago'},
        {id:'2', photo:'TS', name: 'Todolist', description: 'You can write to-do lists with my program '},


    ]

    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>MY PROJECTS</h2>
                <div className={style.projects}>
                    <Project projectDescribe={projectDescribe} />
                </div>
            </div>
        </div>
    );
}



