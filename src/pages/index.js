import React from "react"
import Nav from '../components/navigation'

import Banner from '../components/banner'
import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-main'
import LowerMain from '../components/lower-main'
import Footer from '../components/footer'
import Quote from '../components/quote'


//images

const IndexPage = (props) =>{

  return(
    <>
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
