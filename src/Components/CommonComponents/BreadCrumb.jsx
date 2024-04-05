import React from 'react'

export const BreadCrumb = (props) => {
    const {myObj} = props
    return (
        <>

            <div class="breadcrumbs">
                <div class="page-header d-flex align-items-center" style={{"backgroundImage": "url('assets/img/page-header.jpg')"}}>
                    <div class="container position-relative">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6 text-center">
                                <h2>{myObj.title}</h2>
                                <p>{myObj.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div class="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>{myObj.title}</li>
                        </ol>
                    </div>
                </nav>
            </div>
        </>
    )
}
