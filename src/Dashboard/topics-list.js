import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Card, Container, Row, Col, CardImg, CardTitle, CardFooter } from 'reactstrap'
import Topics from '../Firebase/Topics'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Topicslist() {

    const [data, setData] = useState([]);
    let query = useQuery();

    const Email = query.get("Email");
    const ID = query.get("ID");

    useEffect(() => {
        const getData = async () => {
            const docSnap = await Topics.getTopics();

            setData(docSnap.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                })))
            
        };

        getData();
    })

  return (
    <Container>
        <Row className='mb-5'>
            
               {data.map((doc) => {
                return(
                    <Col>
                        <Card key={doc.id}>
                            <Link to={`/quiz?Email=${Email}&ID=${ID}&Topic=${doc.id}`}>
                                <CardImg src={doc.Image} className='img' height='170px' width='120px' ></CardImg>
                            </Link>
                                <CardFooter>
                                    <CardTitle className='h5 text-center text-primary' >{doc.Name}</CardTitle>
                                    <CardTitle className='h5 text-success text-center' ><Link className='nav-link text-success ' to='/add-mcqs'> + Add Mcqs</Link></CardTitle>
                                </CardFooter>
                        </Card>
                    </Col>
                )
               })

               }
            
        </Row>
    </Container>
  )
}

export default Topicslist