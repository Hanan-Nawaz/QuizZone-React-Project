import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Main';
import MainDashboard from '../Dashboard/MainDashboard';
import Home from '../Components/Home'
import About from '../Components/About-us'
import Signup from '../Components/Sign-up'
import SignIn from '../Components/SignIn'
import Cards from '../Components/cards';

function MainComponent() {
 
  return (
      <Routes>
        <Route path='/' element={<Main />} >
            <Route path='home'  element={ <Home/>  }></Route>
            <Route path='about-us'  element={ <About/>  }></Route>
            <Route path='signup'  element={ <Signup/>  }></Route>
            <Route path='signin'  element={ <SignIn/>  }></Route>
            <Route path='/quiz-topics'  element={ <Cards />}></Route>
        </Route>    
        <Route path='*'  element={ <MainDashboard />  }></Route>
                  

      </Routes>   
    );
}

export default MainComponent