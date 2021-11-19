import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaChessKing } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className="nav-bg">
            <div className="logo-holder">
            <Link style={{color:"inherit",textDecoration:"inherit"}} to="/home"><FaChessKing/>GUARDIAN</Link>
            </div>
        <ul className="nav-links">
            
            <li className="nav-link"><Link style={{color:"inherit",textDecoration:"inherit"}} to="/aboutus">About Us</Link></li>
            <li className="nav-link"><Link style={{color:"inherit",textDecoration:"inherit"}} to="/nocodeplatform">No-CodePlatform</Link></li>
            <li className="nav-link"><Link style={{color:"inherit",textDecoration:"inherit"}} to="/legitimacyplatform">Legitimacy Protocol</Link></li>
            <li className="nav-link"><Link style={{color:"inherit",textDecoration:"inherit"}} to="/partners">Partners</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
