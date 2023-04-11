import React from 'react';
import { Link } from 'react-router-dom';
import "./MainNav.css";

const Footer = () => {
    return (
        
        <nav className='main-footer'>
            <div className='main-footer__title'>About UCCB</div>
            
            <ul className='main-footer__links'>
                <li className='main-footer__link'>
                <Link className="link-footer" to="/home">Topics</Link>
                </li>
                <li className='main-footer__link'>
                <Link className="link-footer" to="/home">Prayer &amp; Worship</Link>
                </li>
                <li className='main-footer__link'>
                <Link className="link-footer" to="/home">Get Involved</Link>
                </li>
                <li className='main-footer__link'>
                <Link className="link-footer" to="/home">Quick links</Link>
                </li>
            </ul>
        </nav>
            
    );
}

export default Footer;