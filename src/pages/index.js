import React from "react"
import Nav from '../components/navigation'

import Banner from '../components/banner'
import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-main'
import LowerMain from '../components/lower-main'
import Footer from '../components/footer'
import Quote from '../components/quote'
import Snowfall from 'react-snowfall'

//images

const IndexPage = (props) =>{

  return(
    <>
      <Snowfall
        // Changes the snowflake color
        color="#dfdfde"
        // Applied to the canvas element
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={1000}
      />
      <Nav/>
      <Banner isFront={true} />
      <UpperMain/>
      <MidMain/>
      <Quote/>
      <LowerMain/>
      <Footer/>
    </>
  )
}

export default IndexPage
