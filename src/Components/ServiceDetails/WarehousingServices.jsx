import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'
import { ServicesMenu } from './Common/ServicesMenu'

export const Warehousing = () => {
    const data = {
        title: "Warehousing Services",
        description: "SILICON ENTERPRISES"
    }

    return (
        <>
            <BreadCrumb myObj={data} />
            <section id="service-details" class="service-details">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <ServicesMenu />

                        <div class="col-lg-8">
                            <img src="assets/img/Service details/Warehouse.png" alt="" class="img-fluid services-img"/>
                                <h1>Warehousing Services</h1>
                                <p>
                                    Silicon Enterprises is a preeminent, and most renowned logistics company in the country. We have extensive experience and expertise in providing world-class storage and distribution services. We provide fully operational warehouse storage spaces to a plethora of businesses from different industries. Almost all of our warehouses are ideally located and well-equipped with the latest tools, technology and security devices. In all likelihood, we ensure that your inventory is stored in the safest possible manner. We consistently offer excellence, primarily because of our competent employees, modern software and technologies, and an unwavering dedication to safety.
                                </p>
                                <h4>Our Warehousing Services Include:</h4>
                                <ul>
                                    <li><i class="bi bi-check-circle"></i> <span>General and bonded warehousing/storage.</span></li>
                                    <li><i class="bi bi-check-circle"></i> <span>Inventory control, picking and packing.</span></li>
                                    <li><i class="bi bi-check-circle"></i> <span>Procurement and financial settlement.</span></li>
                                    <li><i class="bi bi-check-circle"></i> <span>Packaging improvement and design solutions.</span></li>
                                    <li><i class="bi bi-check-circle"></i> <span>Reduced delivery costs to clients.</span></li>
                                </ul>
                                <p>
                                    Silicon Enterprises is a top notch warehouse management company in India. We offer different types of warehouse management services depending upon one’s requirement. We offer fully operational warehouse space to small as well as big businesses. Get the best warehouse management solutions at best price
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
