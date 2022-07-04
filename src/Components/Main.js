import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Cards from './cards'
import About from './About-us'
import Signup from './Sign-up'
import SignIn from './SignIn'
import { TOPICS } from '../JSON/Topics'
import { Route, Routes } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          topics: TOPICS,
        };
      }




    render(){
        return(
            <>
            <Header />
            <Routes>
            <Route path='/quiz-topics'  element={ <Cards topics={ this.state.topics } />}></Route>
            <Route path='/home'  element={ <Home/>  }></Route>
            <Route path='/'  element={ <Home/>  }></Route>
            <Route path='/about-us'  element={ <About/>  }></Route>
            <Route path='/signup'  element={ <Signup/>  }></Route>
            <Route path='/signin'  element={ <SignIn/>  }></Route>
            </Routes>
             
             <Footer/>

             </>
        );
    }
}

export default Main