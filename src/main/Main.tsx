import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'



export function Main() {



    return (
        <div id='main' className={style.mainBlock}>
            <Particles className={style.particles}
                       options={{
                           // background: {
                           //     color: {
                           //         value: "#0d47a1",
                           //     },
                           // },
                           // fpsLimit: 60,
                           // interactivity: {
                           //     // events: {
                           //     //     onClick: {
                           //     //         enable: true,
                           //     //         mode: "push",
                           //     //     },
                           //     //     onHover: {
                           //     //         enable: true,
                           //     //         mode: "repulse",
                           //     //     },
                           //     //     resize: true,
                           //     // },
                           //     modes: {
                           //         // bubble: {
                           //         //     distance: 400,
                           //         //     duration: 2,
                           //         //     opacity: 0.8,
                           //         //     size: 40,
                           //         // },
                           //         // push: {
                           //         //     quantity: 4,
                           //         // },
                           //         // repulse: {
                           //         //     distance: 200,
                           //         //     duration: 0.4,
                           //         // },
                           //     },
                           // },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1,
                               },
                               // collisions: {
                               //     enable: true,
                               // },
                               move: {
                                   // direction: "none",
                                   enable: true,
                                   outMode: "bounce",
                                   random: false,
                                   speed: 1,
                                   straight: false,
                               },

                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                           },
                       }}/>
            <Fade delay={1000}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span >Hello there</span>
                    <span>I am Pavel <span>Radzishevskii</span></span>
                    <ReactTypingEffect
                        text="Frontend Developer." speed={100}
                    />
                </div>
                <Tilt>
                    <div>
                        <div className={style.photo}>
                            <div className={style.image}>

                            </div>
                        </div>
                    </div>
                </Tilt>

            </div>
            </Fade>
        </div>
    );
}


