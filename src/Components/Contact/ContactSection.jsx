import React from 'react'

export const ContactSection = () => {
    return (
        <>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4 mt-4">

                        <div class="col-lg-4">

                            <div class="info-item d-flex">
                                <i class="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Office Location:</h4>
                                    <p>SCF 63, Phase 1, Model Town, Bathinda</p>
                                </div>
                            </div>

                            <div class="info-item d-flex">
                                <i class="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Warehouse Location:</h4>
                                    <p>Malout Road, Bathinda</p>
                                </div>
                            </div>

                            <div class="info-item d-flex">
                                <i class="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h4>Email:</h4>
                                    <p>aman@siliconcomapnies.com</p>
                                </div>
                            </div>

                            <div class="info-item d-flex">
                                <i class="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Call:</h4>
                                    <p>+91-956-956-956-1</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <br /><br />
                    <div class="section-header">
                        <span>Office Location</span>
                        <h2>Office Location</h2>
                    </div>
                    <div>
                        <iframe style={{"border": 0, "width": "100%", "height": "340px"}} src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6012.918590557253!2d74.96254893700605!3d30.193378572156043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8016faaddab21726!2sSilicon%20Enterprises!5e0!3m2!1sen!2sin!4v1672044335805!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="section-header">
                    <span>Warehouse Location</span>
                    <h2>Warehouse Location</h2>
                </div>
                <div>
                    <iframe style={{"border": 0, "width": "100%", "height": "340px"}} 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68487.62750381033!2d74.82700820657136!3d30.24184535551204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391733419b2ccb5d%3A0x7d989223d2ae6896!2sSilicon%20Enterprises!5e0!3m2!1sen!2sin!4v1673335535755!5m2!1sen!2sin"
                        frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
                </>

                )
}
