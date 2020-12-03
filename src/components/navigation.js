import React, {useState} from 'react'
import	Logo from '../../static/logo/main_logo.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Nav = (props) =>{

	const [toggled, setToggled] = useState(false);
			
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
				</nav>
			)}

        </>			
    )
}

export default Nav;