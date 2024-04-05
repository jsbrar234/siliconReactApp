import React from 'react'

export const FeaturedService = () => {
  return (
    <>
        <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
            <div class="icon flex-shrink-0"><i class="fa-solid fa-cart-flatbed"></i></div>
            <div>
              <h4 class="title">Organised Space</h4>
              <p class="description">The Warehouse storage spaces provided by Silicon Enterprises offer scalability and
                material safety and vertical stacking for better space utilization.</p>
              <a href="warehouse.html" class="readmore stretched-link"><span>Learn More</span><i
                  class="bi bi-arrow-right"></i></a>
            </div>
          </div>
     

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="fa-solid fa-truck"></i></div>
            <div>
              <h4 class="title">Assitance in Customer Facilities</h4>
              <p class="description">We are professionals at clearing products through customs, negotiating with
                carriers, and supervising all shipment and delivery-related processes.</p>
              <a href="value_added.html" class="readmore stretched-link"><span>Learn More</span><i
                  class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="icon flex-shrink-0"><i class="fa-solid fa-truck-ramp-box"></i></div>
            <div>
              <h4 class="title">Shipping and Delivery</h4>
              <p class="description">Silicon Enterprises offers high-quality transportation, distribution and logistics
                services. We offer to deliever the products in limited time.</p>
              <a href="logistics.html" class="readmore stretched-link"><span>Learn More</span><i
                  class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}
