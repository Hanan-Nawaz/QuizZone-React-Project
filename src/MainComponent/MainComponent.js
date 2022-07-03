import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Main';
import Maindashboard from '../Dasboard-Components/Main-dashboard'


function MainComponent() {
  return (
      <Routes>
        <Route path='*' element={<Main />} />             
        <Route path='/dashboard'  element={ <Maindashboard />  }></Route>
      </Routes>   
    );
}

export default MainComponent