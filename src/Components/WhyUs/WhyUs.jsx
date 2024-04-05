import React from 'react'
import { BreadCrumb } from '../CommonComponents/BreadCrumb'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Footer } from '../CommonComponents/Footer'
import { Testimonials } from '../CommonComponents/Testimonials'
import { TransportingTheTrust } from '../CommonComponents/TransportingTheTrust'
import { Clients } from '../HomePage/Clients'
import { WhyUsMain } from './WhyUsMain'

export const WhyUs = () => {
    const data = {
        title : "Why Choose Silicon Enterprises?",
        description : "Silicon Enterprises have the solutions for all of you freight forwarding and consolidation needs so call our team of industry experts today to discuss how we can help you to save time and money."
    }
  return (
    <>
        <BreadCrumb myObj={data}/>
        <TransportingTheTrust/>
        <WhyUsMain/>
        <CallToAction/>
        <Clients/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
