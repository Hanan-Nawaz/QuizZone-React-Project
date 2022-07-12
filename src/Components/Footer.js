import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/js.png'
import ReactLogo from '../assets/React.png'
import Node from '../assets/Node.png'
import Mongo from '../assets/Mongo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
<footer class="text-center text-white bg-dark">
  <div class="container pt-4">
    <section class="mb-2">
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://facebook.com/hannan.goraya.9/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-facebook"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://wwww.twitter.com/HananNawaz0"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-twitter"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="mailto:hanannawaz02gmail.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.instagram.com/hanan__nawaz/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-instagram"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.linkedin.com/in/abdulhanan0/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://github.com/Hanan-Nawaz/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-github"></i
      ></a>

      <div class="row">
      <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics' >
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={HTML} width="150" height="150" class="d-inline-block align mr-3" alt="HTML"/>

            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </Link>
        <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics' >
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={CSS} width="150" height="150" class="d-inline-block align mr-3" alt="CSS"/>

            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </Link>
        <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics' >
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={JavaScript} width="150" height="150" class="d-inline-block align mr-3" alt="JavaScript"/>

            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </Link>
        <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics' >
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={ReactLogo} width="150" height="150" class="d-inline-block align mr-3" alt="React"/>

            
          </div>
        </Link>
        <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics'>
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={Node} width="150" height="150" class="d-inline-block align mr-3" alt="Nodejs"/>

            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </Link>
        <Link class="col-lg-2 col-md-12 mb-4 mb-md-0" to='/main/quiz-topics' >
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
                       <img src={Mongo} width="150" height="150" class="d-inline-block align mr-3" alt="MongoDB"/>

            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </Link>
      </div>
    </section>
  </div>

  <div class="text-center text-white p-3">
    © 2022 Copyright | 
    <a class="text-primary btn" href="https://hanannawaz.com/"> Developed by Abdul Hanan</a>
  </div>
</footer>
    </div>
  )
}

export default Footer