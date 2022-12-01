import React from "react";
import styles from './Main.module.css'
import {Link, Route, Routes} from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBarChartFill} from 'react-icons/bs'
import {RxActivityLog} from 'react-icons/rx'
import {BiReceipt} from 'react-icons/bi'
import {CiSettings} from 'react-icons/ci'
import Home from "./Home/Home";
import Records from "./Records/Records";
import Transaction from "./Transaction/Transaction";
import Graphs from "./Graphs/Graphs";
import Settings from "./Settings/Settings";
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
                <Link className={styles.link_bottom} to="/settings">
                    <CiSettings/>
                    <span className={styles.link_title}>Настройки</span>
                </Link>
            </div>
            <div className={styles.main_content}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/records" element={<Records/>}/>
                    <Route path="/dashboard" element={<Graphs/>}/>
                    <Route path="/transaction" element={<Transaction/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main