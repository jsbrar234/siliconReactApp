import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { FeaturedService } from '../CommonComponents/FeaturedService'
import { FeaturesSection } from '../CommonComponents/FeaturesSection'
import { Footer } from '../CommonComponents/Footer'
import { ServicesHome } from '../CommonComponents/ServicesHome'
import { Testimonials } from '../CommonComponents/Testimonials'
import { TransportingTheTrust } from '../CommonComponents/TransportingTheTrust'

export const Services = () => {

    const data = {
        title : "Services",
        description : "Silicon Enterprises have the solutions for all of you freight forwarding and consolidation needs so call our team of industry experts today to discuss how we can help you to save time and money."
    }
  return (
    <>
        <BreadCrumb myObj={data}/>
        <TransportingTheTrust/>
        <FeaturedService/>
        <ServicesHome/>
        <FeaturesSection/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
