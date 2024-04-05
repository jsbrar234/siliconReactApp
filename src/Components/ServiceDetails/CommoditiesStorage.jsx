import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { ServicesMain } from './Common/ServicesMain'

export const CommoditiesStorage = () => {
    const data = {
        title : "Commodities Storage",
        description : "SILICON ENTERPRISES"
    }

    const serviceDetail = {
        image : "assets/img/Service details/Commodities storage.png",
        h1 : "Commodities Storage",
        h2 : "Warehouse Service Network with a massive reach",
        p1 : "Silicon Enterprises is one of the leading agri commodity warehousing companies in India. Our agri commodity logistics and warehousing solutions are designed to ensure the highest levels of safety for your goods. We aspire to provide cutting-edge storage solutions at various locations throughout the agri supply chain. Farmers, Agricultural workers, Government organizations can benefit from our logistics solutions. Undeniably, Silicon Enterprises is a significant player in the Indian Agri-Storage industry with an expanding network of warehouses.",
        p2 : "Our world-class agri commodity storage, warehousing, quality assurance and certification, security management system, and trade financing services are well-known across the country. The vast majority of our clients who avail our warehouse services, also employ our transportation services.",
        p3 : "Our widespread network of modern, hi-tech and accredited storage facilities and warehouses is diversified across India and with tonnes of warehousing capacity. Our highest revenues come from Cotton, Paddy, Rice, Wheat, Pulses and oilseeds. We store various other seasonal commodities as well."
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
