import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Cards from './cards'
import About from './About-us'
import Signup from './Sign-up'
import SignIn from './SignIn'
import Error404 from '../ErrorPage/Error404'
import { Route, Routes } from 'react-router-dom'

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/quiz-topics' element={<Cards />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>

      <Footer />

    </>
  )
}

export default Main