import React from 'react';
import style from './BurgerNav.module.scss';
import { Link} from "react-scroll";




export function BurgerNav() {

    return (
        <div className={style.burgerNav}>
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
            {/*<a href="#contacts">Contacts</a>*/}


        </div>
    );
}


