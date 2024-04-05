import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'

export const ValueAdded = () => {
    const data = {
        title : "Value Added Services",
        description : "SILICON ENTERPRISES"
    }

    const serviceDetail = {
        image : "assets/img/Service details/Value added Services.png",
        h1 : "Value Added Services",
        p1 : "Expedite the growth of your business with our premium quality value added services!",
        p2 : "Silicon Enterprises provides a wide range of value added services to optimize the supply chain operations of our clients. Our solutions are tailor-made and customized as per the needs and demands of our customers. We cover the whole spectrum of value added warehousing services, including Labelling, Serialization and Bar coding, MRP check, Quality Check, Process Delivery Orders, Packing, and so on.",
        p3 : "Value-added logistics in supply chain management has numerous benefits. It can significantly improve your business's bottom line. Warehousing and logistics are two of the most competitive industries, and providing value to your company can help you stand out. Silicon Enterprises can take care of everything from receiving inventory to inspecting it, sorting it, storing it, and delivering it. As a result, you will have a better-quality procedure that could save you time, effort, and money. You can take a glance at the variety of services we offer and contact us for more tailor-made solutions."
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
