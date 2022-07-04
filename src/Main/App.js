import React from 'react'
import '../Css/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import MainComponent from '../MainComponent/MainComponent'

function App() {
  return (
    <Router>
     
     <MainComponent />
          
    </Router>
    );
}

export default App;
