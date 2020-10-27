import React, {useRef, useState} from 'react'
import {Link} from 'gatsby'
import	Logo from '../../static/logo/main_logo.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author', 
		 'About-the-Book', 
		 'Contact'
	]

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	

	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		const res = e.replace(/[-/]/g," ").trim();
	
		return (
			<li>
				<AniLink
					to={filterUrl}>
					{res}
				</AniLink>
			</li>
		)
	})

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <> 
			<nav className="navigation"
				style={props.pathExt  ? {
						borderBottom: '1px solid rgb(41, 41, 41)'
					}:{
						borderBottom: '1px solid rgb(255, 255, 255)'
						}
					}
				>

				<ul className="list-nav-side">
					<li>
						<AniLink 
							cover to="/" 
							duration={2} 
							bg="#f1e8e2">
							Home
						</AniLink>
					</li>
					<li>
						<AniLink cover 
							to="/about-the-author" 
							duration={2} 
							bg="#f1e8e2">
							About the Author
						</AniLink>
					</li>
				</ul>

				<div className="heading-logo">
					<AniLink 
						cover
						to="/" 	
						duration={2} 
						bg="#f1e8e2">
						<img alt="logo" src={Logo}/>
					</AniLink>
				</div>

				<ul className="list-nav-side">
					<li>
						<AniLink 
							cover 
							to="/about-the-book" 
							duration={2}
							bg="#f1e8e2">
							About the Book
						</AniLink>
					</li>
					<li>
						<AniLink 
							cover 
							to="/contact" 
							duration={2} 
							bg="#f1e8e2">
							Contact
						</AniLink>
					</li>
				 </ul>

				<nav 
					onClick={()=>{setToggled(!toggled)}}
					className="burger-nav">
					<span></span>
					<span></span>
				</nav>
			</nav>

			{ toggled && (
				<nav className="active-mobile-nav">
					<p>
						Navigation
					</p>
					{Listed}
				</nav>
			)}

        </>			
    )
}

export default Nav;