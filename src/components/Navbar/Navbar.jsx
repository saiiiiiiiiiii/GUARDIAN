import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="nav-bg"  >
            <div className="logo-holder">
            <NavLink style={{textDecoration:"none"}} to="/">
                <img src="https://www.guardianlink.io/product-hotspot/images/guardian-logo.svg"/>
                </NavLink>
            </div>
        <ul className="nav-links">
            
            <li className="nav-link"><NavLink style={{color:"inherit",textDecoration:"inherit"}} to="/aboutus">About Us</NavLink></li>
            <li className="nav-link"><NavLink style={{color:"inherit",textDecoration:"inherit"}} to="/nocodeplatform">No-Code Platform</NavLink></li>
            <li className="nav-link"><NavLink style={{color:"inherit",textDecoration:"inherit"}} to="/legitimacyprotocol">Legitimacy Protocol</NavLink></li>
            <a className="nav-link"style={{textDecoration:"none"}} href="http://localhost:3000/home/#partner">Partners</a>
            <a className="discordLink"href="https://discord.com/invite/GuardianLink">Join our Discord</a>
            </ul>
            
        </nav>
       
    )
}

export default Navbar
