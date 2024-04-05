import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'

export const ReverseLogistics = () => {
    const data = {
        title : "Reverse Logistics",
        description : "SILICON ENTERPRISES"
    }

    const serviceDetail = {
        image : "assets/img/Service details/reverse logistics.jpg",
        h1 : "Reverse Logistics Services",
        p1 : "With Silicon Enterprises managing the flow of surplus, defective or unused materials, products, or equipment is a smooth process with its reverse logistics services. Our reverse logistics team streamline returns and efficiently decrease asset recovery time with the help of our technology solutions. Our Reverse Logistics solutions cost less and deliver satisfaction and transparency to customer teams. Silicon Enterprises's return management solutions optimize your supply chain to achieve maximum asset retrieval at the far lesser expenses with real-time tracking measures. With our reverse logistics operations, you can be assured of getting the right process, technology and team to navigate the complex and sensitive process of handling returns.",
        p2 : "Customer satisfaction is our top priority and we reflect the same in with our reverse supply chain solutions offering. Customers can rely on our team of experts and technology to create the right reverse supply chain solution for their businesses. We have a team of logistics professionals who understand your business.",
        p3 : "Warehousing Express ensures high security and takes care of all basic requirements involved in reliable reverse logistics. Our reverse logistics solutions are thoroughly aligned with an efficient, transparent, secure chain of custody."
    }
    
  return (
    <>
        <BreadCrumb myObj={data}/>
        <ServicesMain myObj={serviceDetail}/>
        <CallToAction/>
        <Footer/>
    </>
  )
}
