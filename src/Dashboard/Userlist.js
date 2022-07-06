import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col  } from 'reactstrap'
import getusers from '../Firebase/SignIn'

function Userlist() {

    const [data, SetData] = useState([]);

    useEffect(()=> {
        const getUsers = async () => {
           const docSnap = await getusers.getusers();
            SetData(docSnap.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                }
            ))); 
        };
        getUsers();
    }, [])

    return (
     <Container>
        <Row>
            <Col>
            <h3 className='text-center mt-2 mb-5'> <i className='fa fa-list'></i> User List</h3>
            </Col>
        </Row>
        <Row>
            <Col className='table-responsive-sm'>
            <table className='table border border-black table-hover'>
                <thead className='bg-dark text-white border border-white'>
                    <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center' >Name</th>
                    <th className='text-center' >Email</th>
                    <th className='text-center' >Number</th>
                    <th></th>
                    </tr>
                </thead>
                   
                <tbody>
                {data.map((doc, index) => {
return (

    <tr key={doc.id} >
        <td className='text-center' >{index + 1}</td>
        <td className='text-center' >{doc.Name}</td>
        <td className='text-center' >{doc.Email}</td>
        <td className='text-center' >{doc.MobileNumber}</td>
        <td>
        <button type='button' className='border-0 bg-transparent'><Link to={`/edit-user?Email=${doc.Email}&ID=${doc.ID}&lvl=${1}`} className='h5 text-primary' ><i className='fa fa-edit'></i> </Link></button> 
        <button type="button" class="border-0 bg-transparent"><Link to={`/delete-user?Email=${doc.Email}&ID=${doc.ID}&lvl=${1}`} className='h5 text-danger' ><i className='fa fa-trash-o'></i> </Link></button>
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

export default Userlist