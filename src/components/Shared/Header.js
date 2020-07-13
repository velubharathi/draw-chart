import React from 'react';
import guidanzLogoPath from '../../images/guidanz_logo.png'
import './Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <div>
                <img src={guidanzLogoPath} height="" width="" alt="Guidanz Logo"></img></div>
            <div>POC - Guidanz</div>
        </div>
    )
}

export default Header;