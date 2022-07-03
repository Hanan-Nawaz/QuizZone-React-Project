import React from 'react'
import Header from './Header'
import SignIn from '../Components/SignIn' 
import { Route, Routes } from 'react-router-dom'

function Maindashboard() {
  return (
    <>
    <Header />
    <Routes>

    <Route path='/signin'  element={ <SignIn/>  }></Route>

    </Routes>
     
     </>
  )
}

export default Maindashboard