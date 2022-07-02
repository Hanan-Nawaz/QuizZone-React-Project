import React from 'react'
import slider1 from '../assets/slider-1.png'
import slider2 from '../assets/slider-2.png'
import slider3 from '../assets/slider-3.png'

function Slider() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" height='550px' src={slider1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider3} height='550px' alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider2} height='550px' alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Slider