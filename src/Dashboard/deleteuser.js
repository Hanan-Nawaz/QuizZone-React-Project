import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import SignIn from '../Firebase/SignIn';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Deleteuser() {

    let navigate = useNavigate();
    let query = useQuery();
    var Email = query.get("Email");

    const DeleteUserbyID = async () => {
        await SignIn.delusers(Email);
        navigate(`/user-list?Email=hanannawaz0@gmail.com&ID=12345678&lvl=1`);
    }

  return (
        <Container>

            <Row>
                <Col>
                <Card>
                   
                    <CardBody>
                        <CardTitle>
                        <h1 className='text-danger text-center'>Delete Confirmation</h1>
                        </CardTitle>
                        <CardText>
                        <h4 className='text-warning text-center'>Are you sure you want to delete { Email } ?</h4>
                        <br/>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <center>
                        <button className='border-0 bg-transparent text-danger h2' onClick={DeleteUserbyID}><i className='fa fa-trash-o'></i></button>
                        </center>
                    </CardFooter>
                </Card>
                </Col>
            </Row>
        
        </Container>
    )
}

export default Deleteuser