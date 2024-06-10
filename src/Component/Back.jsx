import React from "react";
import LeftArrow from '../assets/Navbar/Left_Arrow.png'
import styles from './Back.module.css'
const Back = () =>{
    return <>
    <div className={styles.container}>
        <div className={styles.img_container}><img src={LeftArrow} alt="" /></div>
        <div className={styles.text}>Back to Questions</div>
    </div>
    </>
}
export default Back;