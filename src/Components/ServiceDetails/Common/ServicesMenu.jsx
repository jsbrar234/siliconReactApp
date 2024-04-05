import React from 'react'
import { Link } from 'react-router-dom'

export const ServicesMenu = () => {
  return (
    <>
        <div class="col-lg-4">
            <div class="services-list">
            <Link to="/commodities-storage">Commodities Storage</Link>
            <Link to="/logistics">Logistics Services</Link>
            <Link to="/reverse-logistics">Reverse Logistics Services</Link>
            <Link to="/transportation">Transportation Services</Link>
            <Link to="/value-added-services">Value Added Services</Link>
            <Link to="/warehousing">Warehousing Services</Link>
            </div>
          
            <h4>SILICON ENTERPRISES</h4>
            
          </div>
    </>
  )
}
