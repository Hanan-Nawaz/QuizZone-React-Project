import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Testimonials() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className=' text-center m-4'> Testimonials </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active p-5">
                                <h6 class="d-block w-100 text-center"><i>Abdul Hanan Nawaz</i></h6>
                                <p class="d-block w-100 text-center"><span className='text-warning'><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i> </span></p>
                                <p class="d-block w-100 text-center">One of the Best Educational Site I used Till Now.</p>
                            </div> 
                            <div class="carousel-item p-5">
                                <h6 class="d-block w-100 text-center"><i>Junid Ali</i></h6>
                                <p class="d-block w-100 text-center"><span className='text-warning'><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i> </span></p>
                                <p class="d-block w-100 text-center">QuizZone is Best.</p>
                            </div> 
                            <div class="carousel-item p-5">
                                <h6 class="d-block w-100 text-center"><i>Seher Ali</i></h6>
                                <p class="d-block w-100 text-center"><span className='text-warning'><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i><i className='fa fa-star'> </i> </span></p>
                                <p class="d-block w-100 text-center">I got Placed after giving tests on QuizZone.</p>
                            </div>

                        </div>
                        <a class="carousel-control-prev text-dark" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonials