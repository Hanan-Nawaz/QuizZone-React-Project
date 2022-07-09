import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/quizzone.png'

function HeaderDashboard( { Email, ID, LVL } ) {

  const [state, SetState] = useState({ status: false });
  const [Url, SetURl] = useState("");

  useEffect( () => {
    const getstate = () => {
      if(LVL === '1'){
        SetState({ status : true});
        SetURl(`?Email=${Email}&ID=${ID}&lvl=${LVL}`);
      }
      else{
        SetState({ status : false});
        SetURl(`?Email=${Email}&ID=${ID}`);
      }  
    };
    getstate();
  }, [LVL]);

 

  return (
    <div>
        <aside>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar  bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-2 mt-4">
        <Link
          to={`/dashboard${Url}`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fa fa-tachometer fa-fw me-3" ></i><span className='h6 ml-2'><b>  Main dashboard</b></span>
        </Link>

        

        { state?.status ? 
        <Link
          to={`/add-topics${Url}`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fa fa-plus fa-fw me-3" ></i><span className='h6 ml-2'><b>  Add Topics</b></span>
        </Link>
        :
        <></>

        }

        { state?.status ? 
        <Link
          to={`/user-list${Url}`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fa fa-list fa-fw me-3" ></i><span className='h6 ml-2'><b>  User List</b></span>
        </Link>
        :
        <></>

        }

        <Link
          to={`/topics-list${Url}`}
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fa fa-list fa-fw me-3" ></i><span className='h6 ml-2'><b>  Topics List</b></span>
        </Link>

        <Link
          to="/main/signin"
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
           onClick={() => { Email = null 
          ID = null
          }}
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