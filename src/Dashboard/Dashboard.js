import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Label } from 'reactstrap'
import getUsers from '../Firebase/SignIn'
import Topics from '../Firebase/Topics'
import Results from '../Firebase/Results'
import { useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Dashboard() {

    let query = useQuery();
    const Email = query.get("Email");

    const [datauser, setDataUser] = useState(0);
    const [dataTopic, setDataTopic] = useState(0);
    const [dataResult, setDataResult] = useState(0);

    useEffect(() => {
        const getusers = async () => {
            const DocSnapUser = await getUsers.getusers();
            setDataUser(DocSnapUser.size);

            const DocSnapTopic = await Topics.getTopics();
            setDataTopic(DocSnapTopic.size);

            const DocSnapResult = await Results.getResults(Email);
            setDataResult(DocSnapResult.size);
        };

        getusers();
    })

    return (
        <Container>
            <Row>
                <Col>
                    <h3 className='text-center mt-2 mb-5'> <i className='fa fa-dashboard'></i> Dashboard</h3>
                </Col>
            </Row>
            <Row className='mb-2 mt-2 ml-2 mr-2'>
                <Col sm={5} className="bg-warning mt-2 rounded card">
                    <center>
                        <Label className='h3 text-center '> Total Users</Label>
                    </center>                   
                     <h1 className='text-center'>{ datauser }</h1>
                </Col>
                <Col>
                </Col>
                <Col sm={5} className="bg-primary mt-2 rounded card">
                    <center>
                        <Label className='h3 text-center '> Total Skills</Label>
                    </center>
                    
                                <h1 className='text-center'>{ dataTopic }</h1>
                           
                </Col>
            </Row>
            <Row className='mb-4 mt-2 ml-2 mr-2'>
                <Col sm={5} className="bg-danger mt-2 rounded card">
                    <center>
                        <Label className='h3 text-center '> Total Test You Give</Label>
                    </center>
                   
                                <h1 className='text-center'>{ dataResult }</h1>
                           
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard