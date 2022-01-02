import React from 'react';
import style from './Projects.module.scss';
import {Project} from './Project/Project';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/to-do-list-3-1.jpg'
import socialImage from '../assets/image/socialnetwork1-696x478-696x478.jpg'


type ProjectType = {
    id: string
    photo: string
    name: string
    description: string
    background:  string

}

export function Projects() {

    let projectDescribe: Array<ProjectType> = [
        {id: '1', photo: 'TS-React-Redux',  name: 'Social network', description: 'It was half year ago' , background: `url(${socialImage})` },
        {id: '2', photo: 'TS', name: 'Todolist',  description: 'You can write to-do lists with my program ',background: `url(${todoImage})`},
    ]

    return (

        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
              <Title text={'My projects'}/>
                <div className={style.projects}>
                    <Project  projectDescribe={projectDescribe}/>

                </div>
            </div>
        </div>

    );
}



