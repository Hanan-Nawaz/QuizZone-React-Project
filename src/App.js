import React from 'react'
import './Css/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Components/Main';
import 'font-awesome/css/font-awesome.css'

function App() {
  return (
    <Router>
      <Main/>
    </Router>
    );
}

export default App;
