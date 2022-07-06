import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap'
import Users from '../Firebase/SignUp'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Edituser() {

    let navigate = useNavigate();
    let query = useQuery();
    var Email = query.get("Email");

    // const EditUserbyID = async () => {
    //     await Users.addUsers(Email, newUser);
    //     navigate(`/user-list?Email=hanannawaz0@gmail.com&ID=12345678&lvl=1`);
    // }

  return (
        <Container>
            <Row>
                <Col>
                <h4 className='text-primary text-center'><i className='fa fa-edit'></i> Edit { Email }</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Edituser