import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_model.jpg'


const UpperMain =()=>{


    return  (
        <>  
            <section className="upper-main">
                <div className="container-gt">
                    <div className="grid-two-columns" id="column-upper"> 
                        <div className="col-left author-image">
                            <img alt="Rob Saranpa" src={AuthorImg}/>
                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                        <div className="col-right">
                            <h1 className="fontHeading">
                                “A bright, new, shiny smile rolled across the big man’s face”
                            </h1>
                            <p>
                                Rob has been playing bass for over 36 years.
                                Playing in over 20 countries around the world 
                                including: Panama, Honduras, Iceland, The Netherlands, 
                                Belgium, Germany, Macedonia, Croatia, Canada, Mexico, 
                                Korea, Japan, Okinawa, Guam, Kwajalein Island, Roi Island, 
                                Indonesia and of course, all over the USA.
                            </p>

                            <p className="author-name-fx">
                                <span>
                                    Rob
                                </span>

                                <span>
                                    Saranpa
                                </span>
                                <span>
                                    Author & Writer
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain