import React from 'react'
import { ServicesMenu } from './ServicesMenu'

export const ServicesMain = (props) => {
    const { myObj } = props
    return (
        <>
            <section id="service-details" class="service-details">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <ServicesMenu />

                        <div class="col-lg-8">
                            <img src={myObj.image} alt="" class="img-fluid services-img" />
                            <h1>{myObj.h1}</h1>
                            <p>
                                {myObj.p1}
                            </p>
                            <h2>{myObj.h2}</h2>
                            <p>
                                {myObj.p2}
                            </p>
                            <p>
                                {myObj.p3}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
