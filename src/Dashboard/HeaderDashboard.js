import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/quizzone.png'

function HeaderDashboard( { MobileNumber } ) {


  return (
    <div>
        <aside>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar  bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-2 mt-4">
        <Link
          to={`/dashboard`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fa fa-tachometer fa-fw me-3" ></i><span className='h6 ml-2'><b>  Main dashboard</b></span>
        </Link>

        <Link
          to={`/dashboard/add-topics`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        //   onClick={}
        >
          <i class="fa fa-plus fa-fw me-3" ></i><span className='h6 ml-2'><b>  Add Topics</b></span>
        </Link>

        <Link
          to="/signin"
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        //   onClick={}
        >
          <i class="fa fa-sign-out fa-fw me-3" ></i><span className='h6 text-danger ml-2'><b>  Sign Out</b></span>
        </Link>

      </div>
    </div>
  </nav>

    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className='container-fluid'>

        
    <div class="row">
      <button class="navbar-toggler m-2 ml-3 border-0" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars text-white"> </i>
  </button>

<div><img
              src={Logo}
              class="m-2 ml-3 rounded"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <b className='h3 align-middle ml-3 text-white'>QuizZone</b>  
</div>  
     



    </div>
    </div>
  </nav>
</aside>

    </div>
  )
}

export default HeaderDashboard