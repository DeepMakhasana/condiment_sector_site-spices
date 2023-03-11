import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from './images/logo_blue-black.svg';
import dropdown from './images/drop-down.svg';
import toggleBtn from './images/toggle-btn.svg';
import closeBtn from './images/close-btn.svg';

const Navbar = () => {
    const [toggle, setToggle] = useState("-100%");
    const [close, setClose] = useState(true);
    const [mobileDropdown, setMobileDropdown] = useState(true);


    const showNavbarLink = () => {
        if (toggle === "-100%") {
            setToggle("0");
            setClose(false);
        } else {
            setToggle("-100%");
            setClose(true);
        }
    }

    const showMobileDropdown = () => {
        if (mobileDropdown === true) {
            setMobileDropdown(false);
        } else {
            setMobileDropdown(true);
        }
    }

    return (
        <header>
            <nav className="navbar flex">
                <div className="logo">
                    <NavLink to="/" onClick={showNavbarLink}><img src={logo} alt="spices logo" /></NavLink>
                </div>
                <ul className="navbar-link flex" style={{ left: toggle }}>
                    <li><NavLink to="/" onClick={showNavbarLink}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={showNavbarLink}>About</NavLink></li>
                    <li className="dropdown flex">
                        <NavLink to="#" className="flex" id='product-dropdown' onClick={showMobileDropdown} >Product <img src={dropdown} alt="dropdown" className='dropdown-icon' /></NavLink>
                        <ul className={mobileDropdown ? 'dropdown-link' : 'dropdown-link-show'}>
                            <li><NavLink to="/product/Sauces,-Glazes-&-Gravies" onClick={showNavbarLink}>Sauces, Glazes & Gravies</NavLink></li>
                            <li><NavLink to="/product/Soups,-Stocks-&-Broth" onClick={showNavbarLink}>Soups, Stocks & Broth</NavLink></li>
                            <li><NavLink to="/product/Baking-Mixes-&-Bases" onClick={showNavbarLink}>Baking Mixes & Bases</NavLink></li>
                            <li><NavLink to="/product/Seasonings" onClick={showNavbarLink}>Seasonings</NavLink></li>
                            <li><NavLink to="/product/Condiments" onClick={showNavbarLink}>Condiments</NavLink></li>
                            <li><NavLink to="/product/Plant-based" onClick={showNavbarLink}>Plant-based</NavLink></li>
                            <li><NavLink to="/product/Custom-Sauces" onClick={showNavbarLink}>Custom Sauces</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/case-studies" onClick={showNavbarLink} >Case Studies</NavLink></li>
                    <li><NavLink to="/contact" className="secondary-btn" onClick={showNavbarLink} >Contact</NavLink></li>
                </ul>
                <div className="toggle" id='toggle-btn' onClick={showNavbarLink}>
                    <img src={close ? toggleBtn : closeBtn} alt="toggle" srcset="" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
