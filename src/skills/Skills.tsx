import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import JS from "../assets/image/skills/images.png";
import CSS from "../assets/image/skills/css.png";
import TypeScriptPhoto from "../assets/image/skills/socket-io-i-typescript.jpg";
import ReactPhoto from "../assets/image/skills/242073a0b58e9c8d8df3aec07be9c4c7.jpg";
import ReduxPhoto from "../assets/image/skills/redux.png";
import GitHubPhoto from "../assets/image/skills/thumb2-github-red-logo-4k-red-brickwall-github-logo-social-networks.jpg";
import PostmanPhoto from "../assets/image/skills/Artboard+1.png";



type SkillDescribeType={
    id:string
    title: string
    text: string
    background: string
}

export function Skills() {

    let skillDescribe: Array<SkillDescribeType>=[
        {id:'1', title:'JS', text: 'I know it',background: `url(${JS})`},
        {id:'2', title:'CSS', text: 'I know it',background: `url(${CSS})`},
        {id:'3', title:'TypeScript', text: 'It`s a piece of cake',background: `url(${TypeScriptPhoto})`},
        {id:'4', title:'React', text: 'It`s a piece of cake',background: `url(${ReactPhoto})`},
        {id:'5', title:'Redux', text: 'It`s a piece of cake',background: `url(${ReduxPhoto})`},
        {id:'6', title:'GitHub', text: 'It`s a piece of cake',background: `url(${GitHubPhoto})`},
        {id:'7', title:'PostMan', text: 'It`s a piece of cake',background: `url(${PostmanPhoto})`},
    ]

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill skillDescribe={skillDescribe} />
                </div>
            </div>
        </div>
    );
}



