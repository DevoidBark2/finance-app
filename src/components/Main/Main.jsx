import React from "react";
import styles from './Main.module.css'
import {Link, Route, Routes} from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBarChartFill} from 'react-icons/bs'
import {RxActivityLog} from 'react-icons/rx'
import {BiReceipt} from 'react-icons/bi'
const Main = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.menu}>
                <Link className={styles.link} to="/">
                    <AiOutlineHome/>
                    <span className={styles.link_title}>Home</span>
                </Link>
                <Link className={styles.link} to="/records">
                    <BiReceipt/>
                    <span className={styles.link_title}>Records</span>
                </Link>
                <Link className={styles.link} to="/dashboard">
                    <BsFillBarChartFill/>
                    <span className={styles.link_title}>Графики</span>
                </Link>
                <Link className={styles.link} to="/transaction">
                    <RxActivityLog/>
                    <span className={styles.link_title}>Транзакции</span>
                </Link>
            </div>
            <div className={styles.main_content}>
                <Routes>
                    <Route path="/" element={<div>домашнаяя страницы</div>}/>
                    <Route path="/records" element={<div>Записи</div>}/>
                    <Route path="/dashboard" element={<div>графики</div>}/>
                    <Route path="/transaction" element={<div>транзакции</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main