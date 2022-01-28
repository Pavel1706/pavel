import React from 'react';
import style from "./Footer.module.scss";
import {Title} from "../common/components/title/Title";
import PhotoTel from "../assets/image/icons/social/unnamed.png";
import PhotoLinke from "../assets/image/icons/social/0882e48a26b45099e43a0ddb74bb66bc.jpg";
import PhotoInsta from "../assets/image/icons/social/red.png";


export function Footer() {



    return <div className={style.footer}>
        <div className={style.container}>
            <Title text={'Pavel Radzishevskii'}/>
            <div className={style.socialIcons}>
            <div className={style.socialIcon}>
                <a href="https://t.me/Pablo_pikasso">
                    <img src={PhotoTel}  alt="" />
                </a>
            </div>
            <div className={style.socialIcon}>
                <a href="https://www.linkedin.com/in/pavel-radzishevskii-677a0a224/">
                    <img src={PhotoLinke} alt="linkedin"/>
                </a>
            </div>
            <div className={style.socialIcon}>
                <a href="https://www.instagram.com/7276_pavel/">
                    <img src={PhotoInsta} alt="insta"/>
                </a>
            </div>
            </div>
        <h5 className={style.copyright}>
            Copyright ©  2021 All rights reserved</h5>
        </div>
    </div>

}



