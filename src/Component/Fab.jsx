import React, { useState } from 'react';
import './Fab.css'; // Assuming you have a CSS file for styles
import open from '../assets/FAB/open.png'
import close from '../assets/FAB/close.png'
import ContactUs from '../assets/FAB/ContactUs.png'
import GiveSuggestion from '../assets/FAB/GiveSuggestion.png'
import ReportIssue from '../assets/FAB/ReportIssue.png'
import ShareFeedback from '../assets/FAB/ShareFeedback.png'
import Report from './Report.jsx'
import Feedback from './Feedback.jsx';
import Suggestion from './Suggesstion.jsx';
import Contact from './Contact.jsx';

const Fab = () => {

    const[isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const [showReport, setShowReport] = useState(false);
    const [showFeedback,setShowFeedback] = useState(false);
    const [showSuggestion,setShowSuggestion] = useState(false);
    const [showContact,setShowContact] = useState(false);

    const handleReportClick = () =>{
        setShowReport(!showReport);
    }

    const handleFeedbackClick = () =>{
        setShowFeedback(!showFeedback);
    }

    const handleSuggestionClick = () =>{
        setShowSuggestion(!showSuggestion);
    }

    const handleContactClick = () =>{
        setShowContact(!showContact);
    }


    return (<>
        <div class="fab-container">
            <div className="fab fab-icon-holder" onClick={handleClick} >
                <div class="fab fab-icon-holder">
                    {!isOpen && <i><img src={open} alt="Open" /></i>}
                    {isOpen && <i><img src={close} alt="Open" /></i>}
                </div>
            </div>


            {/* <ul class="fab-options"> */}
            <ul className={`fab-options ${isOpen ? 'open' : ''}`}>
                <li>
                    <span onClick={handleReportClick} class="fab-label">Report an Issue</span>
                    <div class="fab-icon-holder" >
                        <i onClick={handleReportClick}><img src={ReportIssue} alt="Report Issue" /></i>
                    </div>
                    {showReport && <Report ></Report>}
                    </li>
                <li>
                    <span onClick={handleFeedbackClick} class="fab-label">Share Feedback</span>
                    <div class="fab-icon-holder">
                        <i onClick={handleFeedbackClick}><img src={ShareFeedback} alt="Share Feedback" /></i>
                    </div>
                    {showFeedback && <Feedback></Feedback>}
                </li>
                <li>
                    <span onClick={handleSuggestionClick} class="fab-label">Give Suggestion</span>
                    <div class="fab-icon-holder">
                        <i onClick={handleSuggestionClick}><img src={GiveSuggestion} alt="Give suggestion" /></i>
                    </div>
                    {showSuggestion && <Suggestion></Suggestion>}
                </li>
                <li>
                    <span onClick={handleContactClick} class="fab-label">Contact Us</span>
                    <div class="fab-icon-holder">
                        <i onClick={handleContactClick}><img src={ContactUs} alt="Contact Us" /></i>
                    </div>
                    {showContact && <Contact></Contact>}
                </li>
            </ul>
        </div>
    </>
    );
};

export default Fab;
