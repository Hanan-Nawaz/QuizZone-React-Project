import React from 'react'
import Logo from '../assets/quizzone.png'
import { Link } from 'react-router-dom' 

function Header() {
  return (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/">
    <img src={Logo} width="60" height="60" class="d-inline-block align mr-3 rounded" alt="Quiz Zone"/>
       Quiz Zone 
  </a>  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/main/home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/main/about-us">About Us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/main/quiz-topics">Quiz Topics</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" target='__blank' href="https://hanannawaz.com/">About Developer</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <Link class="btn btn-outline-primary my-2 my-sm-0 " to='/main/signup'>SignUp</Link>
    <Link class="btn btn-outline-primary my-2 my-sm-0 ml-1" to='/main/signin'>SignIn</Link>
    </form>
  </div>
</nav>
)
}

export default Header;