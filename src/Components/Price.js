import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

function Price() {
  return (
    <Container>
        <Row>
            <Col>
                <h2 className=' text-center m-4'> Pricing </h2>
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