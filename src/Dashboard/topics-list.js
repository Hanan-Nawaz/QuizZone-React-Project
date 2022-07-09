import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Card, Container, Row, Col, CardImg, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Topics from '../Firebase/Topics'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Topicslist() {

    const [data, setData] = useState([]);
    const [lvl, setLvl] = useState({ status : false});
    let query = useQuery();

    const Email = query.get("Email");
    const ID = query.get("ID");
    const LVL = query.get("lvl");
   

    useEffect(() => {
        const getData = async () => {
            const docSnap = await Topics.getTopics();

            setData(docSnap.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                })))
                
                if(LVL === '1'){
                    setLvl({ status: true});
                }
            
        };

        getData();
    }, [LVL])

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
                            <CardHeader>
                            <CardTitle className='text-center h4  text-primary' >{doc.Name}</CardTitle>
                            </CardHeader>
                            <CardBody className=''>
                            <CardText className=' d-inline-block h5 text-primary' ><Link className='nav-link text-success ' to={`/take-test?Email=${Email}&ID=${ID}&lvl=${1}&Topic=${doc.id}&Test=1`}> Take Test</Link></CardText>
                                    { lvl?.status ?  
                                <CardText className='d-inline-block h5 float-right text-success ' ><Link className='nav-link text-secondary ' to={`/add-mcqs?Email=${Email}&ID=${ID}&lvl=${1}&Topic=${doc.id}`}> Add Mcqs</Link></CardText>
                                :
                                <></>    
                                }
                            </CardBody>
                               
                                    
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