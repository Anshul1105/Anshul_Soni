import React from 'react';
import styles from './Question.module.css';
import Rocket from '../assets/Navbar/Qrocket.png'
import info from '../assets/Navbar/mi_circle-information.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Question() {
  return (<>
    <div className={styles.question_card}>
        <div className={styles.heading}>
        <div className={styles.question_tags}>
          <span className={styles.tag}>Design</span>
          <span className={styles.tag}>Technology</span>
        </div>
        <div className={styles.img_container}>
          <img src={Rocket} alt="" />
        </div>
      </div>
      <h4>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?</h4>
      <p>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se?</p>

      <div className={styles.question_footer}>
        <div className={styles.help}>
        100 Views</div>
        <div className={styles.help}>
            <img src={info} alt="" />How should you word your answer?
        </div>
      </div>
    </div>
    </>
  );
}

export default Question;
