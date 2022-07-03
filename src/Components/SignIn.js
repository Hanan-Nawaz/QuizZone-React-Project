import React from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import Logo from '../assets/quizzone.png'

function SignIn() {

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

                
                <Row className='mt-3 mb-4'>
                    <Col>
                    <center>
                        
                    <button className="btn btn-primary w-50 " >Sign IN</button>
                    </center>

                    </Col>
                </Row>

            </Form>

        </Container>
    )
}

export default SignIn