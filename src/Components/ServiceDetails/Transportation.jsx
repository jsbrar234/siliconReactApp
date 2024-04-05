import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'
import { ServicesMenu } from './Common/ServicesMenu'

export const Transportation = () => {
    const data = {
        title : "Transportation Services",
        description : "SILICON ENTERPRISES"
    }

    return (
        <>
            <BreadCrumb myObj={data} />
            <section id="service-details" class="service-details">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <ServicesMenu />

                        <div class="col-lg-8">
                            <img src="assets/img/Service details/Transportation.png" alt="" class="img-fluid services-img" />
                            <h1>Transportation</h1>
                            <p>
                                Silicon Enterprises offers cost-effective transport and distribution facilities while increasing efficiency. We have modern infrastructures to assure consistent client satisfaction and efficient logistics performance. Delivering goods in a secure and quick manner leads to improved customer satisfaction. We remain always focused on our goal of offering high-quality customer services.
                            </p>

                            <h3>Take a glance at our major Transportation Services :</h3>
                            <br/>

                                <h4>Courier Facilites</h4>
                                <p>
                                    Our all-inclusive top quality courier service gathers and delivers items in the quickest time possible. E- Commerce stores, multichannel merchants, small and medium enterprises, banking and financial institutions all benefit from our infrastructural and technological facilities. We also offer last mile delivery facilities.
                                </p>

                                <h4>Part-Truck Load (PLT)</h4>
                                <p>
                                    Our part load services are handled with thorough consignment control, and we also provide other offerings such as logistics, supply chain management, warehouse and transportation. Our professional drivers are familiar with all of the best routes and transport networks.
                                </p>
                                <h4>Full-Truck Load (FLT)</h4>
                                <p>
                                    Silicon Enterprises provides full truck load (FTL) transportation facilities as part of its core offerings. We offer full truck load services for consignments that are big enough just to fill a complete cargo container.
                                </p>
                                <h4>Primary and Secondary Transportation</h4>
                                <p>
                                    Silicon Enterprises offers both primary as well as secondary transportation services. Primary Transportation entails flow of goods from factories, suppliers or production locations to the warehouse. Secondary Transportation entails delivering the goods from the warehouse to the shopkeepers or the end consumers. Additionally, we also provide Air Transport facilities for expensive and critical items to meet shortages and urgencies.
                                </p>
                        </div>

                    </div>

                </div>
            </section>
            <CallToAction />
            <Footer />
        </>
    )
}
