import React from 'react'

export const HeroSection = () => {
    return (
        <section id="hero" class="hero d-flex align-items-center">
            <div class="container">
                <div class="row gy-4 d-flex justify-content-between">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Transporting the Trust</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Silicon Enterprises providing best quality logistics,
                            transportation management, warehousing, supply chain services and much more. We facilitate our clients to
                            improve their business approach by providing them with customized cost saving logistics solutions. We
                            combine the most competent and innovative methods with our pledge to service.
                            <br /><br />
                            More than 14 years of experience in this industry made us familiar with all sorts of services available in
                            the logistics industry and we know how to get best out of these services.
                        </p>
                    </div>

                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="assets/img/SE.png" class="img-fluid mb-3 mb-lg-0" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
