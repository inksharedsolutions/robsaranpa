import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'
import AuthorImg from '../../static/author/author_guitar.jpg'
// import Snow from '../components/snow'
// var Snow = require('react-snow-effect');

 const AboutTheAuthor = (props)=>{

     return(
        <> 
            <Layout extPath={false}>
            {/* <Snow/> */}

                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img alt="Rob Saranpa" src={AuthorImg} />
                            </div>
                        </div>

                        <article className="article-section" id="author">
                            <div className="heading-quote">
                                 
                                <h4>
                                    “A bright, new, shiny smile rolled across the big man’s face”
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>

                            <p>
                                Rob has been playing bass for over 36 years.
                                Playing in over 20 countries around the world including: Panama, Honduras, Iceland, The Netherlands, Belgium, Germany, Macedonia, Croatia, Canada, Mexico, Korea, Japan, Okinawa, Guam, Kwajalein Island, Roi Island, Indonesia and of course, all over the USA.
                            </p>


                            <p>INFLUENCES:</p>

                            <p>
                                Rob has three older sisters and they played a lot of Classic Rock like; Led Zeppelin, Deep Purple, ZZ Top, etc. His eldest sister Kathy, taught him the intro to Stairway to Heaven…he was hooked right there. When he was 16 in the Bay Area, his sister Kelley sent him $200 to buy a drum set. Rob moved with his dad, stepmother and half-brother to the sticks in NW Florida where Rob had nothing to do but hone his drumming skills in a metal shed on 10 acres in the boonies. In 1984 Rob moved back to the San Fernando Valley but his drums were repossessed and left in the trunk of a car in the hot humidity of Florida. In the SFV, he noticed in The Recycler (ad magazine) that most bands were looking for bass players. So, instead of buying drums, his brother, Jack, loaned him money to buy his first bass rig. 
                            </p>

                            <p>
                                Pulling out all his classic rock albums, Rob learned them. Side A and B…about 50 albums worth. (He has a secret way of hearing the bass notes).
                            </p>

                            <p>
                                Since then, Rob has played in MANY bands…some note worthy original projects; Moxey, Lions Named Leo and with the iconic LA Area band Angeles. 
                            </p>

                            <p>
                                His musical talents include playing the bass guitar, rhythm guitar, drums and percussion, harmonica as well as vocals.  In the late 1980’s he spent time in the “Hollywood” scene at the Troubadour, The Roxy, and Wolf and Rismiller’s Country Club.  Rob toured overseas for the Department of Defense Armed Forces Professional Entertainment Organization from 1990 to 1994, visiting Croatia, Macedonia, Korea, Japan, Honduras, Panama, Marshall Islands, Guam, Okinawa, Hawaii, Iceland, Amsterdam and Germany. In 1998 he was awarded the “Golden State Country Music Association Bass Player of the Year” in Bakersfield and went on to win the California State title.  Rob took 1st Place in January of 2005 in Christian Lyrics, Nashville Song Service for his song “Oh How I Love Sundays”.  In 2004 Rob composed “The Night Jesus Met Santa Claus”, a children’s book with a music CD sung by Randy Travis’ brother Ricky Traywick. In 2006 Rob was signed by Lamon Records and recoded the debut solo CD, “Am I Worthy?”, which was released January 9, 2007. He also opened Gracefest 2010 Antelope Valley with his original Christian rock band, Bold Witness.  
                            </p>

                            <p>
                                <span className="author-name">
                                    <p className="auth-paragrpah">
                                        <span>Rob</span>
                                        <span>Saranpa</span>
                                    </p>
                                    <span className="author-span-ft">Author |  Writer </span>
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default AboutTheAuthor;