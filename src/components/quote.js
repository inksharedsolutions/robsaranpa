import React from 'react'
import Road from '../../static/img/road.png'

const Quote = () =>{
    return(
        <>
            <section className="two-grid-elements" id="parent-quote-col">
                <div className="grid-child-elements" >
                    <div className="text-content-wrapper">
                        <h1>A bright, new,</h1>
                        {/* <h2>new, </h2> */}
                        <p>shiny smile rolled across the big man’s face</p>
                        <span>Rob Saranpa.</span>
                    </div>
                </div>

                <div className="grid-child-elements" id="left-col">
                    <span></span>
                    <span></span>
                </div>
            </section>
        </>
    )
}


export default Quote