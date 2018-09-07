// import React from 'react'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// // @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'
// // core components
// import { Link } from 'react-router-dom'
// import Header from './Header/Header.jsx'
// import HeaderLinks from './Header/HeaderLinks.jsx'
// import Footer from './Footer/Footer.jsx'
// import GridContainer from './Grid/GridContainer.jsx'
// import GridItem from './Grid/GridItem.jsx'
// import Parallax from './Parallax/Parallax.jsx'
// // sections for this page
// import SectionPills from './SectionPills.jsx'
// import SectionInterested from '.././views/BlogPostsPage/Sections/SectionInterested.jsx'
// import SectionImage from '.././views/BlogPostsPage/Sections/SectionImage.jsx'
// import SubscribeLine from '.././views/BlogPostsPage/Sections/SubscribeLine.jsx'

// import blogPostsPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx'

// import CardExampleCardBackground from './card'

// // @material-ui icons
// import Subject from '@material-ui/icons/Subject'
// import WatchLater from '@material-ui/icons/WatchLater'
// // core components
// import Card from './Card/Card.jsx'
// import CardBody from './Card/CardBody.jsx'
// import Button from './CustomButtons/Button.jsx'

// import cardsStyle from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx'

// import AddIcon from '@material-ui/icons/Add'
// // import Typography from '@material-ui/core/Typography'
// import green from '@material-ui/core/colors/green'
// // import red from '@material-ui/core/colors/red'
// // import MoreVertIcon from '@material-ui/icons/MoreVert'
// // import CardMedia from '@material-ui/core/CardMedia'

// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Recipe from './card'
// import Typography from '@material-ui/core/Typography'
// import axios from 'axios'
// // const Recipecard = ({ recipe }) => (
// // 	<div className="getcard">
// // 		<Card style={{ width: 385, marginLeft: 70, marginTop: 40 }}>
// // 			<CardMedia
// // 				style={{ height: 0, paddingTop: '56.25%' }} // 16:9}
// // 				image={recipe.picture}
// // 			/>
// // 			<CardContent>
// // 				<Typography gutterBottom variant="headline" component="h2">
// // 					{recipe.title}
// // 				</Typography>
// // 				<Typography component="p">{recipe.description}</Typography>
// // 			</CardContent>
// // 			<CardActions>
// // 				<Button size="small" color="primary">
// // 					Share
// // 				</Button>
// // 				<Link to={`/recette/${recipe.id}`}>
// // 					<Button size="small" color="primary">
// // 						Voir recette
// // 					</Button>
// // 				</Link>
// // 			</CardActions>
// // 		</Card>
// // 	</div>
// // )

// // core components

// // const style = {
// // 	...cardsStyle
// // }
// // const Recipecard = ({ description, classes, title }) => (
// // 	<div>
// // 		<Card
// // 			background
// // 			style={{
// // 				backgroundImage: `url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`
// // 			}}
// // 		>
// // 			<CardBody background>
// // 				<h6 className={classes.cardCategoryWhite}>PRODUCTIVITY APPS</h6>
// // 				<a href="#pablo" onClick={(e) => e.preventDefault()}>
// // 					<h3 className={classes.cardTitleWhite} />
// // 				</a>
// // 				<p className={classes.cardDescriptionWhite} />
// // 				<Button simple color="white">
// // 					<Subject /> Read Article
// // 				</Button>
// // 				<Button simple color="white">
// // 					<WatchLater /> Watch Later
// // 				</Button>
// // 			</CardBody>
// // 		</Card>
// // 	</div>
// // )

// class BlogPostsPage2 extends React.Component {
// 	state = {
// 		recipes: [],
// 		expanded: false
// 	}
// 	handleExpandClick = () => {
// 		this.setState((state) => ({ expanded: !state.expanded }))
// 	}
// 	componentDidMount() {
// 		axios
// 			.get('http://localhost:3030/recipe/showRecipeList')
// 			.then((response) => {
// 				this.setState({ recipes: response.data })
// 			})
// 			.catch((err) => {
// 				console.log(' caught it!', err)
// 			})
// 	}
// 	handleSubmit = (event) => {
// 		event.preventDefault()
// 	}
// 	componentDidMount() {
// 		window.scrollTo(0, 0)
// 		document.body.scrollTop = 0
// 	}

// 	render() {
// 		const { classes } = this.props
// 		// const recipeElements = this.state.recipes.map((recipe) => <Recipecard recipe={recipe} />)
// 		// const recipeElements = this.state.recipes.map((recipe) => (
// 		// 	<Recipe key={recipe.id} id={recipe.id} title={recipe.title} description={recipe.description} />
// 		// ))
// 		return (
// 			<div>
// 				<div>
// 					<Header
// 						brand="Material Kit PRO React"
// 						links={<HeaderLinks dropdownHoverColor="info" />}
// 						fixed
// 						color="transparent"
// 						changeColorOnScroll={{
// 							height: 400,
// 							color: 'dark'
// 						}}
// 					/>

// 					<Parallax image={require('.././assets/img/dg2.jpg')} filter="clear" small>
// 						<div className={classes.container}>
// 							<GridContainer justify="center">
// 								<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
// 									<h2 className={classes.title}>
// 										A Place for Entrepreneurs to Share and Discover New Stories
// 									</h2>
// 								</GridItem>
// 							</GridContainer>
// 						</div>
// 					</Parallax>
// 					<div className={classes.main}>
// 						<div className={classes.container}>
// 							<SectionPills />
// 							{/* <div>{recipeElements}</div> */}
// 							{/* <CardExampleCardBackground />
// 							<CardExampleCardBackground /> */}
// 							<SectionInterested />
// 						</div>
// 						<SectionImage />

// 						<SubscribeLine />
// 					</div>
// 					<Footer
// 					content={
// 						<div>
// 					 <div className={classes.left}>
// 								<List className={classes.list}>
// 									<ListItem className={classes.inlineBlock}>
// 										<a href="https://www.creative-tim.com/" className={classes.block}>
// 											Creative Tim
// 										</a>
// 									</ListItem>
// 									<ListItem className={classes.inlineBlock}>
// 										<a href="https://www.creative-tim.com/presentation" className={classes.block}>
// 											About us
// 										</a>
// 									</ListItem>
// 									<ListItem className={classes.inlineBlock}>
// 										<a href="//blog.creative-tim.com/" className={classes.block}>
// 											Blog
// 										</a>
// 									</ListItem>
// 									<ListItem className={classes.inlineBlock}>
// 										<a href="https://www.creative-tim.com/license" className={classes.block}>
// 											Licenses
// 										</a>
// 									</ListItem>
// 								</List>
// 							</div>
// 					 <div className={classes.right}>
// 								&copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{' '}
// 								by <a href="https://www.creative-tim.com">Creative Tim</a> for a better web.
// 							</div>
// 				</div>

// 					}

// }

// export default withStyles(blogPostsPageStyle)(BlogPostsPage2)
