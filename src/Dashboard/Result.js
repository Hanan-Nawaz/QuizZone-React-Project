import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Results from '../Firebase/Results'
import { useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Result() {

    let query = useQuery();
    const Email = query.get("Email");
    // const ID = query.get("ID");
    // const LVL = query.get("lvl");

    const [data, setData] = useState([]);

    useEffect(() => {
        const getallresult = async () => {

           

            const docSnap = await Results.getResults(Email);
            setData(docSnap.docs.map((doc) => (
                {
                ...doc.data(),  id: doc.id
            })))
        }

        getallresult();

        

    })

  return (
    <Container>
        <Row>
            <Col>
                <h4 className='text-primary text-center'>Results</h4>
            </Col>
        </Row>

        <Row>
            <Col className='table-responsive-sm'>
            <table className='table border border-black table-hover'>
                <thead className='bg-dark text-white border border-white'>
                    <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center' >Topic</th>
                    <th className='text-center' >Obtained</th>
                    <th className='text-center' >total</th>
                    <th></th>
                    </tr>
                </thead>
                   
                <tbody>
                {data.map((doc, index) => {
return (

    <tr key={doc.id} >
        <td className='text-center' >{index + 1}</td>
        <td className='text-center' >{doc.Topic}</td>
        <td className='text-center' >{doc.score}</td>
        <td className='text-center' >{doc.question}</td>
        <td>
        {/* <button type='button' className='border-0 bg-transparent'><Link to={`/edit-user?Email=${doc.Email}&ID=${doc.ID}&lvl=${1}`} className='h5 text-primary' ><i className='fa fa-eye'></i> </Link></button>  */}
        </td>
    </tr>

)
})}
                   
                </tbody>
            </table>
            </Col>
        </Row>
    </Container>
  )
}

export default Result