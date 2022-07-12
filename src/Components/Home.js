import React from 'react'
import Slider from './Slider'
import DownloadApp from './DownloadApp'
import Price from './Price'
import Testimonials from './Testimonials'

function Home() {
  return (
    <>
    <Slider />
    <Price/>
    <Testimonials/>
    <DownloadApp/>
    </>
  )
}

export default Home