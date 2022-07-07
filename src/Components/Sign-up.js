import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'reactstrap'
import Logo from '../assets/quizzone.png'
import Users from '../Firebase/SignUp'

function Signup() {


    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Name, setName] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [ID, setID] = useState("");
    const [message, SetMessage] = useState({ error: false, msg: "" });

    const HandleSubmit = async (event) => {
        event.preventDefault();

            SetMessage("");

        if(Email === "" || Password === "" || Name === "" || MobileNumber === "" || ID === ""  ){
            SetMessage({error: true, msg: "All Fileds are Manadatory."});
            return;
        }
        else{
            try {
                const newUser = {
                    Email,
                    Password,
                    Name,
                    MobileNumber,
                    Occupation,
                    ID,
                    Status: 'Active',
                    Role : 'User',
                };
                
                await Users.addUsers(newUser, Email);
                SetMessage({error: false, msg: "User Created Successfully!!"});
            } catch(err){
                SetMessage({error: true, msg: err.message});
            }

            setEmail("");
            setPassword("");
            setMobileNumber("");
            setName("");
            setOccupation("");
            setID("");
        }
       
    
    }

    return (
        <>
        
        
        <Container >

        {message?.msg && (<div class={ message?.error ? "alert alert-dismissible fade show alert-danger" : " alert alert-dismissible fade show alert-success" } role="alert">
  <strong>{message?.msg}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>)
        
    }

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
                            <input type="email" class="form-control" id="inlineFormInputGroupUsername2" value={Email}
                            onChange = { (e) => setEmail(e.target.value) }
                            placeholder="Email" />
                        </div>
                    </Col>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-key'></i></div>
                            </div>
                            <input type="password" class="form-control" id="inlineFormInputGroupUsername2" value={Password}
                            onChange = { (e) => setPassword(e.target.value) }
                             placeholder="password" />
                        </div>
                    </Col>

                </Row>

                <Row className='mt-3'>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Full Name</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> <i className='fa fa-user'>  </i></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" value={Name}
                            onChange = { (e) => setName(e.target.value) } 
                            placeholder="Full Name" />
                        </div>
                    </Col>
                    <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Mobile Number</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-address-book'></i></div>
                            </div>
                            <input type="number" class="form-control" id="inlineFormInputGroupUsername2" value={MobileNumber}
                            onChange = { (e) => setMobileNumber(e.target.value) }
                             placeholder="Mobile Number" />
                        </div>
                    </Col>

                </Row>

                <Row className='mt-3'>
                <Col sm={6} >
                        <label class="sr-only" for="inlineFormInputGroupUsername2">ID</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-user'></i></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" value={ID}
                            onChange = { (e) => setID(e.target.value) }
                             placeholder="Please Enter Combination of 10 Numbers and Alphabets" />
                        </div>
                    </Col>
                    <Col >
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" value={Occupation}
                            onChange = { (e) => setOccupation(e.target.value) }>
                        <option value="0">Choose Occupation</option>
                        <option value="1">Student</option>
                        <option value="2">Teacher</option>
                    </select>
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

            <Row className='mt-3 mb-4'>
                    <Col className=' float-right'>
                        <p className='float-right'><b>Already have an Account? </b> <Link className='' to='/main/signin' >SignIn</Link></p>
                    </Col>
                    
                </Row>

        </Container>
        </>
    )
}

export default Signup