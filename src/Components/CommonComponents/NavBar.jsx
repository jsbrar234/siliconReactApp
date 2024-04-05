import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");
            if (window.pageYOffset > 100) {
                header.classList.add("sticked");
            } else {
                header.classList.remove("sticked");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="assets/img/SE.png" alt="" />
                        <h1>Silicon Enterprises</h1>
                    </a>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/why-us">Why Us?</Link></li>
                            <li className="dropdown">
                                <a href="#"><span>Services Details</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><Link to="/commodities-storage">Commodities Storage</Link></li>
                                    <li><Link to="/logistics">Logistics Services</Link></li>
                                    <li><Link to="/reverse-logistics">Reverse Logistics Services</Link></li>
                                    <li><Link to="/transportation">Transportation Services</Link></li>
                                    <li><Link to="/value-added-services">Value Added Services</Link></li>
                                    <li><Link to="/warehousing">Warehousing Services</Link></li>
                                </ul>
                            </li>
                            <li><Link className="get-a-quote" to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
