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

    const [datauser, setDataUser] = useState([]);
    const [dataTopic, setDataTopic] = useState([]);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const getusers = async () => {
            const DocSnapUser = await getUsers.getusers();
            setDataUser(DocSnapUser.docs.map((doc) => ({
                ...doc.data() , id: doc.id
            })))

            const DocSnapTopic = await Topics.getTopics();
            setDataTopic(DocSnapTopic.docs.map((doc) => ({
                ...doc.data() , id: doc.id
            })))

            const DocSnapResult = await Results.getResults(Email);
            setDataResult(DocSnapResult.docs.map((doc) => ({
                ...doc.data() , id: doc.id
            })))
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
                {datauser.map((doc , index) => {
                    return(
                        <>
                        <h1 className='text-center'>{ index + 1 }</h1>
                        <h1 className='userdash'> { doc.Name }</h1>
                        </>
                        
                    )
                })}
                </Col>
                <Col>
                </Col>
                <Col sm={5} className="bg-primary mt-2 rounded card">
                    <center>
                        <Label className='h3 text-center '> Total Skills</Label>
                    </center>
                {dataTopic.map((doc , index) => {
                    return(
                        <>
                        <h1 className='text-center'>{ index + 1 }</h1>
                        <h1 className='userdash'> { doc.Name }</h1>
                        </>
                        
                    )
                })}
                </Col>
            </Row>
            <Row className='mb-4 mt-2 ml-2 mr-2'>
                <Col sm={5} className="bg-danger mt-2 rounded card">
                    <center>
                        <Label className='h3 text-center '> Total Test You Give</Label>
                    </center>
                {dataResult.map((doc , index) => {
                    return(
                        <>
                        <h1 className='text-center'>{ index + 1 }</h1>
                        <h1 className='userdash'> { doc.score }</h1>
                        </>
                        
                    )
                })}
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard