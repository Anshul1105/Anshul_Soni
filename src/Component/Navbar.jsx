import React from "react";
import styles from './Navbar.module.css' 
import dropdownImg from '../assets/Navbar/Nav_dropdown.png'
import profile from '../assets/Navbar/Nav_img.png'
const Navbar = () =>{

    return <>
        <div className={styles.container}>
            <div className={styles.title}>THE <span className={styles.highlight}>PRODUCT</span> PLATFORM</div>
            
            <div className={styles.options}>
                <span className={styles.opText}>Learn</span><span><img src={dropdownImg} alt="dropdown" /></span>
                <span className={styles.opText}>Practice</span><span><img src={dropdownImg} alt="dropdown" /></span>
                <span><img className={styles.profile} src={profile} alt="" /></span>
            </div>
                    
        </div>

    </>
}

export default Navbar;