import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Main';
import MainDashboard from '../Dashboard/MainDashboard';
import AddTopics from '../Dashboard/Add-Topics';



function MainComponent() {
 
  return (
      <Routes>
        <Route path='*' element={<Main />} />    
        <Route path='/dashboard/*'  element={ <MainDashboard />  }>
        <Route path='add-topics' element={<AddTopics />} />             
        </Route>
       
      </Routes>   
    );
}

export default MainComponent