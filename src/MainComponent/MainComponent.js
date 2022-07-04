import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Main';
import MainDashboard from '../Dashboard/MainDashboard';
import AddTopics from '../Dashboard/Add-Topics';
import DashboardError from '../ErrorPage/DashboardError';

function MainComponent() {
 
  return (
      <Routes>
        <Route path='*' element={<Main />} />    
        <Route path='/dashboard/*'  element={ <MainDashboard />  }>
        <Route path='add-topics' element={<AddTopics />} />             
        </Route>
       <Route path='/dashboard-error' element = { <DashboardError /> } />

      </Routes>   
    );
}

export default MainComponent