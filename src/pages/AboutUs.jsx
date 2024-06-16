import React from 'react'
import Heading from '../components/common/Heading'
import About from '../components/home/About'
import Teams from '../components/home/Team'

const AboutUs = () => {
  return (
    <>
    <Heading heading="About" title="Home" subtitle="About" />
    <About />
    <Teams />
  </>

  )
}

export default AboutUs