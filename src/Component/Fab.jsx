import React, { useState } from 'react';
import './Fab.css'; // Assuming you have a CSS file for styles
import open from '../assets/FAB/open.png'
import close from '../assets/FAB/close.png'
import ContactUs from '../assets/FAB/ContactUs.png'
import GiveSuggestion from '../assets/FAB/GiveSuggestion.png'
import ReportIssue from '../assets/FAB/ReportIssue.png'
import ShareFeedback from '../assets/FAB/ShareFeedback.png'
import Report from './Report.jsx'

const Fab = () => {

    const[isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const [showReport, setShowReport] = useState(false);

    const handleReportClick = () =>{
        setShowReport(!showReport);
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
                    <div class="fab-icon-holder" style={{backgroundImage:{ReportIssue},objectFit:"cover"}}>
                        <i onClick={handleReportClick}><img src={ReportIssue} alt="Report Issue" /></i>
                    </div>
                    {showReport && <Report onClose={()=>{
                        setShowReport(false)
                    }}></Report>}
                </li>
                <li>
                    <span class="fab-label">Share Feedback</span>
                    <div class="fab-icon-holder">
                        <i><img src={ShareFeedback} alt="Share Feedback" /></i>
                    </div>
                </li>
                <li>
                    <span class="fab-label">Give Suggestion</span>
                    <div class="fab-icon-holder">
                        <i><img src={GiveSuggestion} alt="Give suggestion" /></i>
                    </div>
                </li>
                <li>
                    <span class="fab-label">Contact Us</span>
                    <div class="fab-icon-holder">
                        <i><img src={ContactUs} alt="Contact Us" /></i>
                    </div>
                </li>
            </ul>
        </div>
    </>
    );
};

export default Fab;
