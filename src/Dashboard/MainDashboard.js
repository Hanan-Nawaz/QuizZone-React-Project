import React from 'react'
import HeaderDashboard from './HeaderDashboard'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Components/SignIn'
import FooterDashboard from './FooterDashboard'
import AddTopics from './Add-Topics'

function MainDashboard() {
  return (
    <>
    <HeaderDashboard />
  
   <div className='bodydashboard'>
   <Routes>

   <Route path="/add-topics"  element={ <AddTopics/>  }></Route>
   <Route path='/signin'  element={ <SignIn/>  }></Route>
   </Routes>
   <FooterDashboard/>
   </div>
   
     </>
  )
}

export default MainDashboard