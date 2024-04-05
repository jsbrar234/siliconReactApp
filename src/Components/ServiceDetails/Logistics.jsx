import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'

export const Logistics = () => {
    const data = {
        title : "Logistics",
        description : "SILICON ENTERPRISES"
    }

    const serviceDetail = {
        image : "assets/img/Service details/Logistics .png",
        h1 : "Logistics Distribution",
        p1 : "Silicon Enterprises offers high-quality transportation, distribution and logistics services. In today's fast-paced world, the necessity for a seamless flow of commodities and products to reach their end destination securely and quickly is our top-most priority. The team of Silicon Enterprises is well- trained and equipped with the best infrastructure to fulfill all of your distribution and transportation needs. We ensure that products arrive safely at their ultimate destination. We have extensive experience with both FTL (Full Truck Load) and LTL (Less Than Truck Load) deliveries.",
        p2 : "Silicon Enterprises is among the top Logistics companies in Punjab. We are a Third-party Logistics service provider with the best Logistics & distribution services and warehouse in Punjab. We also serve our customers with the latest technology, automation, customized Warehouse Management & Warehouse Consulting solutions apart from Warehouse logistics distribution in Punjab or anywhere else in India.",
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
