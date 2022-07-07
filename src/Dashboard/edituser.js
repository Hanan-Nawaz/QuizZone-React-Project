import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Container, Form, Input, Label } from 'reactstrap'
import Users from '../Firebase/SignUp'
import SignIn from '../Firebase/SignIn';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Edituser() {

    const [Email_user, setEmail] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Name, setName] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [status, setStatus] = useState("");
    const [ID, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [Role, setRole] = useState("");

    let navigate = useNavigate();
    const [stat, setStat] = useState({ status: false });
    let query = useQuery();
    var Email = query.get("Email");
    const [message, SetMessage] = useState({ error: false, msg: "" });

    useEffect(() => {
        const gtuserData = async () => {
            const docSnap = await SignIn.getuser(Email);
            if(docSnap.exists()){
                const data = docSnap.data();
                setEmail(data.Email);
                setMobileNumber(data.MobileNumber);
                setName(data.Name);
                setOccupation(data.Occupation);
                setId(data.ID);
                setPassword(data.Password);
                setRole(data.Role);
            }
        };

        gtuserData();

    }, [Email]);


    const EditUserbyID = async (e) => {
        e.preventDefault();
        setStat({ status: false });

        if (Email_user === "" || Name === "" || MobileNumber === "") {
            SetMessage({ error: true, msg: "All Fileds are Manadatory." });
            setStat({ status: false });
            return;
        }
        else {
            setStat({ status: true });
            try {

                const newUser = {
                    Email,
                    Name,
                    MobileNumber,
                    Occupation,
                    status,
                    ID,
                    Password,
                    Role,
                };

                await Users.addUsers(newUser, Email);
                SetMessage({ error: false, msg: "Updated Successfully!!!" });
                navigate(`/user-list?Email=hanannawaz0@gmail.com&ID=12345678&lvl=1`);
            }
            catch (err) {
                SetMessage({ error: true, msg: err.message});
            }
        }
    }

    return (
        <Container>

{message?.msg && (<div class={ message?.error ? "alert alert-dismissible fade show alert-danger" : " alert alert-dismissible fade show alert-success" } role="alert">
  <strong>{message?.msg}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>)
        
    }

            <Row>
                <Col>
                    <h4 className='text-primary text-center mb-5'><i className='fa fa-edit'></i> Edit {Email}</h4>
                </Col>
            </Row>
            <Form onSubmit={EditUserbyID}>
                <Row>
                    <Col sm={6}>
                        <Label>Name</Label>
                        <Input value={Name} onChange={ (e) => { setName(e.target.value) } }/>
                    </Col>
                    <Col sm={6}>
                        <Label>Email</Label>
                        <Input value={Email_user} onChange={ (e) => { setEmail(e.target.value) } }/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <Label>Mobile Number</Label>
                        <Input value={MobileNumber} onChange={ (e) => { setMobileNumber(e.target.value) } }/>
                    </Col>
                    <Col sm={6}>
                        <Label>Occupation</Label>
                        <select className='custom-select ' value={Occupation} onChange={ (e) => { setOccupation(e.target.value) } }>
                            <option value='0'> Select Occupation </option>
                            <option value='1'> Student </option>
                            <option value='2'> Teacher </option>
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Label>Status</Label>
                        <select className='custom-select ' value={status} onChange={ (e) => { setStatus(e.target.value) } }>
                            <option value='0'> Select Status </option>
                            <option value='Active'> Active </option>
                            <option value='Inactive'> Inactive </option>
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <center>
                            <button className='btn btn-primary mt-5 mb-5 w-50'>Save</button>
                        </center>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <center>

                            {stat?.status ?
                                <div className="spinner-grow text-primary m-5 " role="status"></div>
                                :
                                <></>
                            }
                        </center>

                    </Col>
                </Row>

            </Form>



        </Container>
    )
}

export default Edituser