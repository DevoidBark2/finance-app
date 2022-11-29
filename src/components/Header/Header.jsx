import React from "react";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsChevronCompactDown} from 'react-icons/bs'
const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.logo_block}>
                <img src={logo} alt="logo" width={50} height={50}/>
                <span className={styles.logo_text}>Мой кошелек</span>
            </div>
            {/*<div className={styles.profile_block}>
                <IoMdNotificationsOutline color="white" size={30}/>
                <img className={styles.profile_logo} src="https://sun1-83.userapi.com/s/v1/ig2/GyWJWGz3jFWYGdzhFADVG7grz03lzjH_fXPV_8YEdG6q5oDUKyUMzPkvzkmhLsBh0dkHIWQurLj2AGiSHJn2JyLY.jpg?size=50x50&quality=95&crop=0,639,1920,1920&ava=1" alt="profile logo"/>
                <span>Иван П.</span>
                <BsChevronCompactDown/>
            </div>*/}
            <div className={styles.auth}>
                <a className={styles.auth_item} href="#">Войти</a>
                <a className={styles.auth_item} href="#">Регистрация</a>
            </div>
        </div>
    )
}

export default Header;