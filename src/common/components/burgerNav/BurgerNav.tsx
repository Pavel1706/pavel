import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";


export function BurgerNav() {

    let [menuIsOpen, setMenuIsOpen ]= useState(false);


    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show} ` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                {/*<a href="#main">Main</a>*/}
                {/*<a href="#skills">Skills</a>*/}
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                {/*<a href="#projects">Projects</a>*/}
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={style.burgerButton} onClick={()=>{setMenuIsOpen(!menuIsOpen)}}></div>
        </div>
    );
}


