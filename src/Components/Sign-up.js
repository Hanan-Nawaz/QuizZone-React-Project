import React from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import Logo from '../assets/quizzone.png'

function Signup() {

    const HandleSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <Container className='' >


            <Row>
                <Col>
                    <center>
                        <img src={Logo} alt='QuizZone' width='150px' height='150px' className=" m-5 rounded" />
                    </center>
                </Col>
            </Row>
            <Form onSubmit={HandleSubmit}>
                <Row>
                    <Col sm={6} >

                        <label class="sr-only" for="inlineFormInputGroupUsername2">Email</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-envelope'></i></div>
                            </div>
                            <input type="email" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Email" />
                        </div>
                    </Col>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-key'></i></div>
                            </div>
                            <input type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="password" />
                        </div>
                    </Col>

                </Row>

                <Row className='mt-3'>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Full Name</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-envelope'></i></div>
                            </div>
                            <input type="email" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Full Name" />
                        </div>
                    </Col>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Mobile Number</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-address-book'></i></div>
                            </div>
                            <input type="number" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Mobile Number" />
                        </div>
                    </Col>

                </Row>

                <Row className='mt-3'>

                    <Col >
                        <div class="form-check">


                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label class="form-check-label" for="gridRadios1">
                                Student
                            </label>
                        </div>
                    </Col>



                    <Col >
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                                Teacher
                            </label>
                        </div>
                    </Col>

                </Row>

                <Row className='mt-3 mb-4'>
                    <Col>
                    <center>
                        
                    <button className="btn btn-primary w-50 " >Sign Up</button>
                    </center>

                    </Col>
                </Row>

            </Form>

        </Container>
    )
}

export default Signup