import React, { useState } from 'react';
import styles from './Feedback.module.css';
import pin from '../assets/FAB/attach-file.png';

const Feedback = () => {
    const [description, setDescription] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAnonymousChange = (event) => {
        setIsAnonymous(event.target.checked);
    };

    const handleSubmit = () => {
        // Submit form logic here
        console.log({
            description,
            isAnonymous,
        });
        setIsSubmitted(true);
    };

    return (
        <>
            <div className={styles.container}>
                {isSubmitted ? (
                    <div className={styles.thankyou}>
                        Thanks for your valuable feedback!
                    </div>
                ) : (
                    <>
                        <div className={styles.heading}>
                            Let us know about the <b>Feedback</b> about us!
                        </div>
                        <div className={styles.body}>
                            <form className={styles.form_container}>
                                <textarea
                                    className={styles.description}
                                    name="description"
                                    placeholder="Write here..."
                                    value={description}
                                    onChange={handleDescriptionChange}
                                ></textarea>
                                <div className={styles.checkbox_container}>
                                    <input
                                        type="checkbox"
                                        id="anonymous"
                                        name="anonymous"
                                        checked={isAnonymous}
                                        onChange={handleAnonymousChange}
                                    />
                                    <label htmlFor="anonymous">
                                        Send this feedback anonymously
                                    </label>
                                </div>
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

export default Feedback;
