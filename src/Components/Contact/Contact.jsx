import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { Footer } from '../CommonComponents/Footer'
import { Testimonials } from '../CommonComponents/Testimonials'
import { TransportingTheTrust } from '../CommonComponents/TransportingTheTrust'
import { ContactSection } from './ContactSection'

export const Contact = () => {
    const data = {
        title : "Contact",
        description : "Silicon Enterprises have the solutions for all of you freight forwarding and consolidation needs so call our team of industry experts today to discuss how we can help you to save time and money."
    }
  return (
    <>
        <BreadCrumb myObj={data}/>
        <TransportingTheTrust/>
        <ContactSection/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
