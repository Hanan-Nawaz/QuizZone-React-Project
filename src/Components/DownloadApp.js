import React from 'react'
import Logo from '../assets/quizzone.png'
import PlayStore from '../assets/playstore.png'

function DownloadApp() {
  return (
    <div className="comtainer p-5">
        <center>
            <div className="row">
                <div className="col-md-12 ">
                    <img className='rounded' src={Logo} height='80' width='80' alt='Quiz Zone'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <div class="typewriter">
                        <h4>Download our App:)</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <a target='__blank' href='https://hanannawaz.com/'>
                    <img src={PlayStore} height='100' width='200' alt='Play Store'/>
                    </a>                   
                </div>
            </div>
        </center>
    </div>
  )
}

export default DownloadApp