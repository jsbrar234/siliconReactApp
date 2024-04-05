import React from 'react'
import { Footer } from '../CommonComponents/Footer'
import { AboutHome } from '../CommonComponents/AboutHome'
import { CallToAction } from '../CommonComponents/CallToAction'
import { Clients } from './Clients'
import { FeaturedService } from '../CommonComponents/FeaturedService'
import { FeaturesSection } from '../CommonComponents/FeaturesSection'
import { HeroSection } from './HeroSection'
import { ServicesHome } from '../CommonComponents/ServicesHome'
import { Testimonials } from '../CommonComponents/Testimonials'

export const HomePage = () => {
    return (
        <>
            <main id="main">
                <HeroSection />
                <FeaturedService />
                <AboutHome />
                <ServicesHome />
                <CallToAction />
                <FeaturesSection />
                <Clients />
                <Testimonials />
                <Footer/>
            </main>
        </>
    )
}
