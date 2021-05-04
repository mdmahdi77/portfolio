import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../../resume/resume-2.pdf'
import './Navbar.css'

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav class="navbar navbar-expand-lg py-2">
            <div class="container-fluid logo">
                <Link class="navbar-brand logo" to="/">MEHEDI</Link>
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0 styleNavbar">
                        <li class="nav-item">
                            <Link className="nav-link ml-3" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-3" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-3" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-3" to="/blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-3" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;