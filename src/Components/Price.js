import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/quizzone.png'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

function Price() {
  return (
    <Container>
        <Row>
            <Col>
                <h2 className=' text-center m-4'> About QuizZone </h2>
                <p className=' text-center m-4'> One of the best Educational Organization Serving the World for Free. Our Services are Available for Every Human Being irrespective of their <b>Religion</b>, <b>Race</b> and <b>Color</b>.  <br/> <i className='h6 text-primary'> In the Quran, Allah (swt) says:<br/> “Help one another in acts of piety and righteousness. And do not assist each other in acts of sinfulness and transgression. And be aware of Allah. Verily, Allah is severe in punishment” (Quran 5:2).</i>   </p>
            </Col>
        </Row>
        <Row className='mb-3 mt-2 p-2'>
            <Col sm={6}>
                <center>
                    <img  height='310px' width='300px' src={Logo} alt='QuizZone'/>
                </center>
            </Col>
            <Col sm={6}>
                <h3 className=' text-center mt-5 mb-5'> What is QuizZone? </h3>
                <p className=' text-center mt-5 mb-5'> This is A React Project Developed by Abdul Hanan Nawaz. Students as well as IT professionals will use this platform to further enhance their skills, further polish their skills. They will be able to Pick a Language and give Test. Every Question will have to be marked within just 1 minute time span and at the end Mark sheet will be Given.</p>
                <Link className=' btn mt-5 mb-4 float-right btn-primary rounded' to='/main/about-us'> Read More <b className='h5'>&raquo;</b>  </Link>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className=' text-center m-4'> Pricing </h2>
                <p className=' text-center m-4'> Quickly be able to Join a Company as a Software Engineer after our tests and awarded with certificates.<br/> <i> BEST OF LUCK</i>   </p>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col sm={5} className='mt-3'>
                <Card className='card'>
                    <center>
                        <div className='bg-primary ml-5 mr-5 text-center h4 p-2 text-white'>Student</div>
                    </center>

                    <CardTitle className='text-center h4 mt-2'><b className='h1 text-primary'>$0</b> <small> / per month</small></CardTitle>

                    <CardBody className='mt-2'>
                        <CardText className='h6 text-center '><b className='text-primary' >Free</b> Access</CardText>
                        <CardText className='h6 text-center'><b className='text-primary' >Free</b> Certificate</CardText>
                        <CardText className='h6 text-center'><b className='text-primary' >Un-Paid</b> Internship with Certificate</CardText>
                        <CardText className='p text-center'>(for some Students)</CardText>
                        <center>
                            <Link className=' btn border border mt-5 mb-4 btn-outline-primary card rounded' to='/main/signin'> Get Access </Link>
                        </center>
                    </CardBody>
                </Card>
            </Col>
            <Col>
            </Col>

            <Col sm={5} className='mt-3'>
                <Card className='card'>
                    <center>
                        <div className='bg-primary ml-5 mr-5 text-center h4 p-2 text-white'>Professional</div>
                    </center>

                    <CardTitle className='text-center h4 mt-2'><b className='h1 text-primary'>$0</b> <small> / per month</small></CardTitle>

                    <CardBody className='mt-2'>
                        <CardText className='h6 text-center '><b className='text-primary' >Free</b> Access</CardText>
                        <CardText className='h6 text-center'><b className='text-primary' >Free</b> Certificate</CardText>
                        <CardText className='h6 text-center'><b className='text-primary' >Paid</b> Job Offer </CardText>
                        <CardText className='p text-center'>(for some Professionals)</CardText>
                        <center>
                            <Link className=' btn border border mt-5 mb-4 btn-outline-primary card rounded' to='/main/signup'> Get Access </Link>
                        </center>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default Price