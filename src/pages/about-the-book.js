import React from 'react';
import Book1 from '../../static/book/book_cover.png';

import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import BookInfo from '../components/book-info/book-info';
// var Snow = require('react-snow-effect');

const AboutTheBook = (props) => {
	const slug = props.location.href;
	const disqusConfig = {
		shortname: 'rob-saranpa',
		config: { identifier: 12, slug }
	};

	return (
		<Layout extPath={false}>
			{/* <Snow/> */}
			<Banner spanFirst={`About the`} contextHeading={`Book`} />

			<main className="wrapperMain">
				<div className="container" id="book-containers">
					<BookInfo
						data={{
							title: `The Night Jesus Met Santa Claus`,
							spanTitle: '',
							imgSrc: Book1,
							id: 'dreamwatcher',
							content: `Have you ever wondered what would happen if Santa Claus ran into Jesus Christ...on Christmas Eve? As Santa Claus is making his regular, yearly rounds, he climbs down a chimney and rolls right into Jesus Christ. But Santa can't find that name on his list because no one ever told him about Jesus. Find out what happens when the most famous personalities of the holiday season meet for the first time...and Santa Claus learns the true meaning of Christmas.`,

							ebooks: {
								stratton: 'https://www.stratton-press.com/books/the-night-jesus-met-santa-claus/',
								barnes:
									'https://www.barnesandnoble.com/w/the-night-jesus-met-santa-claus-rob-saranpa/1013046604?ean=9781648951176',
								amazon:
									'https://www.amazon.com/Night-Jesus-Met-Santa-Claus/dp/1648951171/ref=sr_1_1?dchild=1&keywords=9781648951022&qid=1604392657&sr=8-1'
							},
							paperback: {
								amazon:
									'https://www.amazon.com/Night-Jesus-Met-Santa-Claus/dp/1648951015/ref=sr_1_1?dchild=1&keywords=9781648951015&qid=1604392678&sr=8-1',
								barnes:
									'https://www.barnesandnoble.com/w/the-night-jesus-met-santa-claus-rob-saranpa/1013046604?ean=9781648951015',
								booksamillion:
									'https://www.booksamillion.com/p/Night-Jesus-Met-Santa-Claus/Rob-Saranpa/9781648951015?id=8009965417365&_ga=2.201386834.2145208486.1603698726-1770015116.1600996550'
							},
							hardcover: {
								amazon:
									'https://www.amazon.com/Night-Jesus-Met-Santa-Claus/dp/1648951171/ref=sr_1_1?dchild=1&keywords=9781648951176&qid=1597083645&sr=8-1',
								barnes:
									'https://www.barnesandnoble.com/w/the-night-jesus-met-santa-claus-rob-saranpa/1013046604?ean=9781648951176',
								booksamillino:
									'https://www.booksamillion.com/p/Night-Jesus-Met-Santa-Claus/Rob-Saranpa/9781648951176?id=8043859463603&_ga=2.14589175.1190744042.1604385963-131468970.1604385963'
							}
						}}
					/>

					<div className="external-reviews-cont">
						<h3>External Reviews:</h3>
						<ul className="reviews-list">
							<li>
								"When a story becomes a song, I can’t help but be in awe. Since I was a child, I’ve
								wanted to be an author.."{' '}
								<a
									rel="noopener noreferrer"
									target="_blank"
									href="https://ohblessit.com/the-night-jesus-met-santa-claus"
								>
									Read more
								</a>
							</li>
						</ul>
					</div>

					<div className="commentSection">
						<DiscussionEmbed {...disqusConfig} />
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default AboutTheBook;
