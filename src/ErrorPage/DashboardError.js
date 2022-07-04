import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Logo from '../assets/quizzone.png'

function DashboardError() {
  return (
    <Container>
     
        <div className='alert alert-danger text-center mt-5'>
        <img src={Logo} className='img rounded-circle mb-2 mt-2' width='150px' height='150px' alt='QuizZone' />
           <br/>
          <h1 className='text-primary mt-0 text-center'> QuizZone </h1>
          <br/>
          <h1 className='error text-center'> Error! </h1>
          <br/>
          <b className='text-dark h4'>  Please SignIn First <br/><Link className='link text-danger' to='/signin'>  SignIn</Link></b>
        </div>
    </Container>
  )
}

export default DashboardError