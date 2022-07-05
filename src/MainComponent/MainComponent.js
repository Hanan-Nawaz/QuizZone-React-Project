import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from '../Components/Main';
import MainDashboard from '../Dashboard/MainDashboard';
import Home from '../Components/Home'
import About from '../Components/About-us'
import Signup from '../Components/Sign-up'
import SignIn from '../Components/SignIn'
import Cards from '../Components/cards';
import Error404 from '../ErrorPage/Error404';
import DashboardError from '../ErrorPage/DashboardError';

function MainComponent() {
 
  return (
      <Routes>
         <Route path='/'  element={ <Main/>  }></Route>
        <Route path='/main/*' element={<Main />} >
            <Route path='home'  element={ <Home/>  }></Route>
            <Route path='about-us'  element={ <About/>  }></Route>
            <Route path='signup'  element={ <Signup/>  }></Route>
            <Route path='signin'  element={ <SignIn/>  }></Route>
            <Route path='quiz-topics'  element={ <Cards />}></Route>
            <Route path='quiz-topics/*' element={<Navigate to='/main/signin' replace />}></Route>
            <Route path='*'  element={ <Error404 />}></Route>
        </Route>
        <Route path='*'  element={ <MainDashboard />  }></Route>
        <Route path='/dashboard-error' element = { <DashboardError /> } />
                 

      </Routes>   
    );
}

export default MainComponent