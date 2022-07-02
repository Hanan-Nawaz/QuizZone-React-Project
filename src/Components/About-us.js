import React from 'react'
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from 'reactstrap'
import hanan from '../assets/hanan.jpg'

function About() {
  return (
    <>
    <div className="about">
                <h1 className="text" >About US</h1>    
        </div>

        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-6">
                    <h2 className="text-center">What is QuizZone?</h2>
                </div>
                <div className="col-md-6">
                    <p className="text-center mb-5 mt-1"> This is A React Project Developed by Abdul Hanan Nawaz. <br/> 
                    Students as well as IT professionals will use this platform to further enhance their skills, 
                    further polish their skills. They will be able to Pick a Language and give Test. Every Question
                    will have to be marked within just 1 minute time span and at the end Mark sheet will be Given.
                     </p>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-md-12">
                    <h2 className="border-bottom border-dark text-center"> Our Team </h2>
                </div>
            </div>

            <div className="row  mb-5">
                <div className="col d-flex justify-content-center">
                <center>

                    <Card>
                        <CardImg src={hanan} alt='Abdul Hanan' height='300px' width='100px'/>
                        <CardBody>
                            <CardTitle className='h5'>Abdul Hanan Nawaz</CardTitle>
                            <CardText>Full Stack Web Developer | Android Developer</CardText>
                            <CardText className='p'>Trying to understand the language of 0s and 1s.<br/>
                                 <b>Web developer</b>. React | NodeJs  <br/> <b>Android Developer</b>. Kotlin | Java</CardText>
                        </CardBody>
                        <CardFooter>
                        <a className='nav-link' href={hanan} download>Download CV</a>
                        <a className='nav-link' target='__blank' href='https://hanannawaz.com/' >Visit Webiste</a>
                        </CardFooter>
                    </Card>
                    </center>

                </div>
            </div>
        </div>


        </>
  )
}

export default About