import React, { useState } from 'react';
import styles from './Report.module.css';
import pin from '../assets/FAB/attach-file.png';

const Report = () => {
    const [description, setDescription] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        // Submit form logic here
        setIsSubmitted(true);
    };

    return (
        <>
            <div className={styles.container}>
                {isSubmitted ? (
                    <div className={styles.thankyou}>
                        Thanks for bringing the issue to our attention.<br></br>
                        We'll review it shortly and provide an update soon!
                    </div>
                ) : (
                    <>
                        <div className={styles.heading}>
                            Let us know about the <b>issue</b> you are facing right now!
                        </div>
                        <div className={styles.body}>
                            <form className={styles.form_container}>
                                <label className={styles.labels}>Choose a section</label><br />
                                <select className={styles.input_box} name="section">
                                    <option value="interview-questions">Interview Questions</option>
                                    <option value="concept-cards">Concept Cards</option>
                                    <option value="practice-questions">Practice Questions</option>
                                    <option value="quizzes">Quizzes</option>
                                </select><br />
                                <label className={styles.labels} htmlFor="description">
                                    Describe the issue in detail <span className={styles.required}>*</span>
                                </label><br />
                                <textarea
                                    className={styles.description}
                                    name="description"
                                    placeholder="Write here..."
                                    value={description}
                                    onChange={handleDescriptionChange}
                                ></textarea>
                            </form>
                            <div className={styles.btn_container}>
                                <button type="button" className={styles.attach_button}>
                                    <img src={pin} alt="pin" />Attach
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className={styles.submit_button}
                                    disabled={!description.trim()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Report;
