import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

function DashboardError() {
  return (
    <Container>
        <div className='alert alert-danger text-center'>
          Please Login First <Link to='/signin'>SignIn</Link>
        </div>
    </Container>
  )
}

export default DashboardError