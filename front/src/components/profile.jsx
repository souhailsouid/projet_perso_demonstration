/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import People from '@material-ui/icons/People'
import Add from '@material-ui/icons/Add'
import Favorite from '@material-ui/icons/Favorite'
import Subject from "@material-ui/icons/Subject";
import { Link } from 'react-router-dom'
import classNames from 'classnames';

// core components
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import NavPills from './NavPills/NavPills.jsx'
import Card from './Card/Card.jsx'
import CardBody from './Card/CardBody.jsx'
import CardHeader from './Card/CardHeader.jsx'
import Badge from './Badge/Badge.jsx'
import Muted from './Typography/Muted.jsx'
import Parallax from './Parallax/Parallax.jsx'
import Clearfix from './Clearfix/Clearfix.jsx'
import Button from './CustomButtons/Button.jsx'
import axios from 'axios'
import christian from '.././assets/img/faces/christian.jpg'
import oluEletu from '.././assets/img/examples/olu-eletu.jpg'
import clemOnojeghuo from '.././assets/img/examples/clem-onojeghuo.jpg'
import cynthiaDelRio from '.././assets/img/examples/cynthia-del-rio.jpg'
import mariyaGeorgieva from '.././assets/img/examples/mariya-georgieva.jpg'
import clemOnojegaw from '.././assets/img/examples/clem-onojegaw.jpg'
import darrenColeshill from '.././assets/img/examples/darren-coleshill.jpg'
import souhail from '.././assets/img/faces/souhail.jpg'
import marc from '.././assets/img/faces/marc.jpg'
import kendall from '.././assets/img/faces/kendall.jpg'
import cardProfile2Square from '.././assets/img/faces/card-profile2-square.jpg'
import RecipeCardProfil from './cardprofilepost'
import profilePageStyle from '.././assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import RotateCard from './rotatecard'

class Profil extends React.Component {

   constructor(props) {
		super(props)
		
        this.state = {
            recipes: [],
            
			activeRotate1: '',
			activeRotate2: '',
            profile: []
		}
    }
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
     		const { match: { params } } = this.props
 
        	axios
			.get('http://localhost:3030/recipe/showRecipeList',{
                headers: {
					'x-access-token': localStorage.getItem('token')
				}
            })
			.then((response) => {
				this.setState({ recipes: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
            	axios
			.get(`http://localhost:3030/profil/showProfile`)
			.then((response) => {
				this.setState({ profile: response.data })
                console.log('profile ', this.state.profile.firstName)
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	render() {
	const { classes, recipe , ...rest} = this.props
 
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
		const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
        
    if (this.state.recipes === null) {
			return <p>Loading...    </p>
		}
        const enfin = this.state.profile.imageURL
        const recipeElements = this.state.recipes.map((recipe) => <RotateCard  recipe={recipe} />)
		return (
			<div>
				<Header
					color="transparent"
					brand="Souhail SOUID"
					links={<HeaderLinks dropdownHoverColor="info" />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: 'info'
					}}
					{...rest}
				/>
				<Parallax
					image={require('.././assets/img/examples/city.jpg')}
					filter="dark"
					className={classes.parallax}
				/>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile}>
									<div>
						<img src={   souhail}   alt="..." className={imageClasses} />
   
									</div>
									<div className={classes.name}>
										<h3 className={classes.title}>{this.state.profile.firstName} {this.state.profile.lastName}</h3>
										<h6>DEVELOPPER FULL STACK</h6>
										<Button justIcon simple color="github" className={classes.margin5}>
											<i className={classes.socials + ' fab fa-github'}/>

										</Button>
										<Button justIcon simple color="youtube" className={classes.margin5}>
											<i className={classes.socials + ' fab fa-youtube'} />
										</Button>
										<Button justIcon simple color="linkedin" className={classes.margin5}>
											<i className={classes.socials + ' fab fa-linkedin'} />
										</Button>
									</div>

								</div>
                                {/* <ProfilImage profile={this.state.profile}/> */}
								<div className={classes.follow}>
                                 	<Link to='/edit_profil'>
									<Tooltip
										id="tooltip-top"
										title="Manage your profil"
										placement="top"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button justIcon round color="success" className={classes.followButton}>
											<Add className={classes.followIcon} />
										</Button>
									</Tooltip>
                                    </Link>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classNames(classes.description, classes.textCenter)}>
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.{' '}
							</p>
						</div>
						<div className={classes.profileTabs}>
							
							
											<GridContainer>
                                            
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
                                                		<div className={classes.follow}>
									 <Link to="/admin">
                                    <Tooltip
										id="tooltip-top"
										title="Manage your posts"
										placement="top"
										classes={{ tooltip: classes.tooltip }}
									>
                                   
										<Button  round color="warning" className={classes.followButton}>
									<Subject />  Lists
        
										</Button>
                                       
									</Tooltip>
                                     </Link>
								</div>
													<h4 className={classes.title}>Latest Posts</h4>
												<div>
                                                {recipeElements}
                                                      {/* <RotateCard recipe={this.state.recipes}/> */}
												</div>	
												
													
													
													
													
												</GridItem>
												<GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
													<h4 className={classes.title}>Stats</h4>
													<ul className={classes.listUnstyled}>
														<li>
															<b>60</b> Products
														</li>
														<li>
															<b>4</b> Collections
														</li>
														<li>
															<b>331</b> Influencers
														</li>
														<li>
															<b>1.2K</b> Likes
														</li>
													</ul>
													<hr />
													<h4 className={classes.title}>About this work</h4>
													<p className={classes.description}>
														French luxury footwear and fashion. The footwear has
														incorporated shiny, red-lacquered soles that have become his
														signature.
													</p>
													<hr />
													<h4 className={classes.title}>Focus</h4>
													<Badge color="primary">Footwear</Badge>
													<Badge color="rose">Luxury</Badge>
												</GridItem>
											</GridContainer>
									
									
									
							

						
				</div>
				
				 <Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											Souhail SOUID
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/presentation" className={classes.block}>
											About me
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="//blog.creative-tim.com/" className={classes.block}>
											CV
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/license" className={classes.block}>
											Licenses
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {1900 + new Date().getYear()} , made
								by <a href="https://www.creative-tim.com">Souhail SOUID</a> 
							</div>
						</div>
					}
				/> 
			</div>
            </div>
            </div>  
		)
	}
}

export default withStyles(profilePageStyle)(Profil)
