import React from 'react'
import { Container, Row, Col } from 'reactstrap'


function Userlist() {
    return (
     <Container>
        <Row>
            <Col>
            <h3 className='text-center mt-2 mb-5'> <i className='fa fa-list'></i> User List</h3>
            </Col>
        </Row>
     </Container>
        )
}

export default Userlist