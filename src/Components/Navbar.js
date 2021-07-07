import React from 'react'
import avatar from '../Images/avatar.png';
import {NavLink} from 'react-router-dom'; 
function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <div>
                        <img src={avatar} alt="" srcset="" />
                    </div>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/aboutme" exact activeClassName="active">
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink to="/contactme" exact activeClassName="active">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 Danish Shaikh </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar
