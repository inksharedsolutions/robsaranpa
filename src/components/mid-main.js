import React from 'react'
import {Link} from "gatsby"
import BookImg from '../../static/book/book_cover.png'


const MidMain = ()=>{
    return(
        <>
            <section className="book-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="book-columns"> 

                        <div className="box-element-left">
                            <img alt="book cover" src={BookImg}/>
                            <button>
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>
                        </div>

                        <div className="box-element-right">

                            <p className="span-letter-ft fontHeading">
                                <span>The Night Jesus Met</span> 
                                <span>Santa Claus</span>
                            </p>

                            <h1 className="fontHeading heading-ft">About the Book</h1>
                            <p>
                               Have you ever wondered what would happen if Santa 
                               Claus ran into Jesus Christ...on Christmas Eve? As 
                               Santa Claus is making his regular, yearly rounds, 
                               he climbs down a chimney and rolls right into Jesus Christ. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default MidMain;