import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Results from '../Firebase/Results';
import Logo from '../assets/quizzone.png'
import getUsers from '../Firebase/SignIn'
import  JsPDF from 'jspdf'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Certificate() {

    let query = useQuery();
    const Email = query.get("Email");
    const Topic = query.get("RID");
    const [data, setData] = useState([]);
    const [datauser, setDataUser] = useState([]);

    const generatePDF = () => {

        const report = new JsPDF('landscape','pt','a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save(`${Email}_${Topic}.pdf`);
        });
    }

    useEffect(() => {
        const getResults = async () => {
            const docSnap = await Results.getResult(Email, Topic);
            const docSnapuser = await getUsers.getuser(Email);
            if(docSnap.exists() && docSnapuser.exists()){
                const data = docSnap.data();
                const datauser = docSnapuser.data();
                setData(data);
                setDataUser(datauser);
           }
           else{
            <>
                <Row>
                    <Col>
                        <h1 className='text-danger text-center'>No Certificate Found</h1>
                    </Col>
                </Row>
            </>
           }
        };

        getResults();
    })

  return (
    <Container >
        <Row>
            <Col>
                <h4 className='text-primary text-center'>Certificate for { Topic }</h4>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className='text-danger float-right'>Please View in Big Screens for better View.</p>
            </Col>
        </Row>

        <Container id='report'  className='bg-primary mt-1 rounded w-75'>
            <Container className=' bg-white'>
                <Row>
                    <Col>
                        <img src={Logo} className='img rounded-circle' width='60px' height='60px'  alt='QuizZone'/>
                        <h4 className='text-center'>Certificate of Achievement</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='text-center text-warning'> FOR</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className='text-center '> {Topic} </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='text-center '>is granted to</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className='text-center '>{datauser.Name}</h3>
                        <h4 className='border-bottom'></h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-5 mr-5'>
                        <p className='ml-5 mr-5 text-center'>He/She got { data.score } Marks from Total of { data.question }. This certificate is issued to { datauser.Name } from QuizZone Private Limited for his participation in our skill tests. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='granted'>QuizZone</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='text-center'>Abdul Hanan Nawaz</h6>
                        <h6 className='border-bottom'></h6>
                        <h6 className='text-center'>CEO  QuizZone</h6>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>


                    <Col>
                        <h6 className='text-center '>{ data.TestDate }</h6>
                        <h6 className='border-bottom'></h6>
                        <h6 className='text-center'>Issue Date</h6>
                    </Col>
                </Row>
            </Container>
        </Container>

        <Row className='mb-5 mt-5'>
            <Col>
            <center>
                <button type='button' onClick={generatePDF} className='btn btn-primary'><i className='fa fa-download'></i> Download </button>
            </center>
            </Col>
        </Row>
    </Container>
  )
}

export default Certificate