import React from 'react'

export const AboutHome = () => {
    return (
        <>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">
                        <div class="col-lg-6 position-relative align-self-start order-lg-last order-first">
                            <img src="assets/img/SE.png" class="img-fluid" alt=""/>
                                <a href="assets/img/SE PROFILE VIDEO.mp4" class="glightbox play-btn"></a>

                        </div>
                        <div class="col-lg-6 content order-last  order-lg-first">
                            <h3>About Us</h3>
                            <p>
                                Silicon Enterprises provides the best-in-class CFA services from start to end, providing continuity and
                                service excellence throughout the entire process of warehousing, primary/secondary logistics. We maintain
                                superior customer service levels with the support of our network of warehouses & trained employees who
                                work diligently to optimize distribution flows.
                            </p>
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i class="bi bi-diagram-3"></i>
                                    <div>
                                        <h5>Value Added Services</h5>
                                        <p>Being the leading Clearing and Forwarding Agents, we offer a full suite of value-added services
                                            like kitting, packaging, labelling, order processing, among others.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i class="bi bi-fullscreen-exit"></i>
                                    <div>
                                        <h5>Focus of Core Business</h5>
                                        <p>We enable corporations to focus on their primary business, while we take care of their storage and
                                            shipping concerns.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bi bi-broadcast"></i>
                                    <div>
                                        <h5>Manpower Management</h5>
                                        <p>Our warehouse & distribution team is specifically trained for safe material handling, Location
                                            mapping & inventory management.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
