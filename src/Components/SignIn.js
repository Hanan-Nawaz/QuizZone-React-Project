import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import Logo from '../assets/quizzone.png'
import getUsers from '../Firebase/SignIn'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
    let navigate = useNavigate();
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [message, SetMessage] = useState({error: false, msg: ""});

    const HandleSubmit = async (event) => {
        event.preventDefault();
        SetMessage("");

        if(Email === "" || Password === ""){
            SetMessage({error: true, msg: "All Fields are Manadatory!!"});
            return;
        }
        else{
            try{
                const docSnap  = await getUsers.getuser(Email);
                if(docSnap.exists){
                    const data = docSnap.data();

                    if(data.Password === Password){
                        SetMessage({error: false, msg: "Logged In"});
                        navigate(`/dashboard?Email=${data.Email}&ID=${data.ID}`);
                    }
                    else{
                        SetMessage({error: true, msg: "Wrong Password!!!"});
                    }
                }
                else{
                    SetMessage({error: true, msg: "User Not Found"});
                }
            } catch(err){
                SetMessage({error: true, msg: err.message });
            }
        }

    }

    return (
        <Container >

        {message?.msg && (<div class={ message?.error ? "alert alert-dismissible fade show alert-danger" : " alert alert-dismissible fade show alert-success" } role="alert">
  <strong>{message?.msg}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>) }

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

                        <label class="sr-only" for="Email">Email</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-envelope'></i></div>
                            </div>
                            <input type="email" class="form-control" id="Email"
                            value={Email} onChange={ (e) => { SetEmail(e.target.value) } }
                            placeholder="Email" />
                        </div>
                    </Col>
                    <Col sm={6} >
                        <label class="sr-only" for="Password">Password</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className='fa fa-key'></i></div>
                            </div>
                            <input type="password" class="form-control" id="Password" placeholder="Password" 
                            value={Password} onChange={ (e) => { SetPassword(e.target.value) } }
                            />
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

                <Row className='mt-3 mb-4'>
                    <Col className=' float-right'>
                        <p className='float-right'><b>Don't have an Account? </b> <Link className='' to='/signup' >Signup</Link></p>
                    </Col>
                    
                </Row>

            </Form>

        </Container>
    )
}

export default SignIn