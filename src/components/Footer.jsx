import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './images/logo_white-black.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';


const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className="container footer flex">
                <div className="logo-contact">
                    <div className="footer-logo">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="contact">
                        <p>(248) 544-4574</p>

                        <p>Midas Foods International<br />
                            10750 Capital<br />
                            Oak Park, MI 48237</p>
                    </div>
                </div>
                <div className="links">
                    <h3>Link</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/case-studies">Case Studies</NavLink></li>
                    </ul>
                </div>
                <div className="products">
                    <h3>Product</h3>
                    <ul>
                        <li><NavLink to="/product/Sauces,-Glazes-&-Gravies">Sauces, Glazes & Gravies</NavLink></li>
                        <li><NavLink to="/product/Soups,-Stocks-&-Broth">Soups, Stocks & Broth</NavLink></li>
                        <li><NavLink to="/product/Baking-Mixes-&-Bases">Baking Mixes & Bases</NavLink></li>
                        <li><NavLink to="/product/Seasonings">Seasonings</NavLink></li>
                        <li><NavLink to="/product/Condiments">Condiments</NavLink></li>
                        <li><NavLink to="/product/Plant-based">Plant-based</NavLink></li>
                        <li><NavLink to="/product/Custom-Sauces">Custom Sauces</NavLink></li>
                    </ul>
                </div>
                <div className="social-icon">
                    <h3>Stay in Touch</h3>
                    <div className="icon">
                        <NavLink to="https://www.facebook.com/"><img src={facebook} alt="facebook"/></NavLink>
                        <NavLink to="https://www.instagram.com/"><img src={instagram} alt="instagram"/></NavLink>
                        <NavLink to="https://www.linkedin.com/"><img src={linkedin} alt="linkedin"/></NavLink>
                        <NavLink to="https://www.twitter.com/"><img src={twitter} alt="twitter"/></NavLink>
                    </div>
                </div>
            </div>
            <div className="sub-footer">
                <p>© {new Date().getFullYear()} by Deep Makhasana, All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer
