import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling behavior
        });
    };

    return (
        <>
            <footer id="footer" className="footer">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <img src="assets/img/SE.png" alt="" />
                                <span>Silicon Enterprises</span>
                            </a>
                            <p>
                                Silicon Enterprises providing best quality logistics, transportation management, warehousing, supply chain services and much more. We facilitate our clients to improve their business approach by providing them with customized cost saving logistics solutions. We combine the most competent and innovative methods with our pledge to service.
                            </p>
                            <p>More than 14 years of experience in this industry made us familiar with all sorts of services available in
                                the logistics industry and we know how to get best out of these services.</p>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                                <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                                <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
                                <li><Link to="/why-us" onClick={scrollToTop}>Why Us?</Link></li>
                                <li><a href="#" onClick={scrollToTop}>Gallery</a></li>
                                <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link to="/commodities-storage" onClick={scrollToTop}>Commodities Storage</Link></li>
                                <li><Link to="/logistics" onClick={scrollToTop}>Logistics Services</Link></li>
                                <li><Link to="/reverse-logistics" onClick={scrollToTop}>Reverse Logistics Services</Link></li>
                                <li><Link to="/transportation" onClick={scrollToTop}>Transportation Services</Link></li>
                                <li><Link to="/value-added-services" onClick={scrollToTop}>Value Added Services</Link></li>
                                <li><Link to="/warehousing" onClick={scrollToTop}>Warehousing Services</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">

                            <p>
                                SCF 63, <br />
                                Phase 1, Model Town<br />
                                Bathinda <br /><br />
                                <strong>Phone:</strong> +91-956-956-956-1<br />
                                <strong>Email:</strong> aman@siliconcompanies.com<br />
                            </p>

                        </div>

                    </div>
                </div>

                <div className="container mt-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Silicon Enterprises</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://www.freelancer.com/u/jsbrar07427">Jaskamalpreet Singh</a>
                    </div>
                </div>

            </footer>
        </>
    )
}
