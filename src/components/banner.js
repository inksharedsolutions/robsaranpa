import React from 'react'
import {Link} from 'gatsby'
import '../assets/scss/pages.scss'
import { Parallax, Background } from 'react-parallax';

const Banner = (props) =>{

    const isFront =props.isFront;
    return(
        <>

            { (props.isFront) ? 
                <>
                    <section className="banner-section">
                        <Parallax 
                            bgImageAlt="the cat"
                            strength={300}
                            bgImage={require('../../static/banner/arch_banner.jpg')}
                            >
                                <div className="container-gt">
                                    <div className="grid-two-columns" id="banner-layout-responsive">
                                        
                                        <div className="left-col">

                                        </div>

                                        <div className="right-col banner-text">
                                            <h1 className="heading-banner-fs">
                                                <span>The </span>
                                                <span>Night Jesus met</span>
                                                <span>Santa Clause</span>
                                            </h1>

                                            <span className="meta-spanline">
                                                Rob Saranpa
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </Parallax>
                    </section>
                </>
             :
                <>
                    <section className="web-banner">
                        <div className="container">
                            <div className="wrapper-ds">
                                <span> 
                                    {props.spanFirst}
                                </span>
                                <h1>
                                    {props.contextHeading}
                                </h1>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}           

export default Banner;