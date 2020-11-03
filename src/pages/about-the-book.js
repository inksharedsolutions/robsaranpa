import React from 'react'
import Book1 from '../../static/book/book_cover.png'


import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info';
import ABA from './about-the-author'
// var Snow = require('react-snow-effect');


const AboutTheBook= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'rob-saranpa',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>	
			<span className="banr-tagline-fx">Gardiner Noble</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)

	return(
		<Layout extPath={false}>
      {/* <Snow/> */}
            <Banner 
				spanFirst={`About the`}
				contextHeading={`Book`}
            />

			<main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >

						<BookInfo
							data={{
								title:`The Night Jesus Met Santa Claus`,
								spanTitle: '',
								imgSrc: Book1,
								id:'dreamwatcher',
								content:
								`Have you ever wondered what would happen if Santa Claus ran into Jesus Christ...on Christmas Eve? As Santa Claus is making his regular, yearly rounds, he climbs down a chimney and rolls right into Jesus Christ. But Santa can't find that name on his list because no one ever told him about Jesus. Find out what happens when the most famous personalities of the holiday season meet for the first time...and Santa Claus learns the true meaning of Christmas.`,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/the-night-jesus-met-santa-claus/',
									barnes: 'https://www.barnesandnoble.com/w/the-night-jesus-met-santa-claus-rob-saranpa/1013046604?ean=9781648951176',
									amazon :'https://www.amazon.com/Night-Jesus-Met-Santa-Claus/dp/1648951171/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1597083602&sr=8-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/Night-Jesus-Met-Santa-Claus/dp/1648951015/ref=sr_1_1?dchild=1&keywords=9781648951015&qid=1597083627&sr=8-1',
									barnes:'https://www.barnesandnoble.com/w/the-night-jesus-met-santa-claus-rob-saranpa/1013046604?ean=9781648951015',
									booksamillion:'https://www.booksamillion.com/p/Night-Jesus-Met-Santa-Claus/Rob-Saranpa/9781648951015?id=8009965417365&_ga=2.201386834.2145208486.1603698726-1770015116.1600996550',
								}
							}}
						/>

							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>


	  	</Layout>
	)
}

export default AboutTheBook;