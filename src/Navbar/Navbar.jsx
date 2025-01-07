import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Navbar() {
    return (
        <section>
            <div className="site-logo"> Site Logo </div>
            <div className="patient-details">
                Your Dashboard
            </div>
            <div className="right-section"> 
                <input type='search' placeholder='search'/>
                <FontAwesomeIcon icon="fa-thin fa-message"  className='navbar-icon'/>

                <span> Profile </span>
            </div>
        </section>
    );
}