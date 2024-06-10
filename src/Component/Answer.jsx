import React from 'react';
import profile from '../assets/Navbar/Nav_img.png'
import styles from './Answer.module.css'

function Answer() {
    return (<>
        
        <div className={styles.answer_card}>
            <div className={styles.answer_header}>
                <div className={styles.avatar}><img src={profile} alt="" /></div>
                <div className={styles.user_info}>
                    <span className={styles.user_name}>Neha Bhat (You)</span>
                    <span className={styles.date}>Jun 27, 2023</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi....<b>show more</b></p>
            <div className={styles.answer_footer}>
                <button className={styles.like_button}>👍 Like</button>
                <div className={styles.comment_section}>
                    <input type="text" placeholder="Add a comment" />
                    <button className={styles.post_button}>Post</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Answer;
