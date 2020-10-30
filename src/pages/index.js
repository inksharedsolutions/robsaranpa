import React,{Component} from "react"
import Nav from '../components/navigation'

import Banner from '../components/banner'
import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-main'
import LowerMain from '../components/lower-main'
import Footer from '../components/footer'
import Quote from '../components/quote'
// var Snow = require('react-snow-effect');
// import Snow from '../components/snow'
//images

const IndexPage = (props) =>{

  return(
    <>
      {/* <Snow></Snow> */}
      {/* <Snow/> */}
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
