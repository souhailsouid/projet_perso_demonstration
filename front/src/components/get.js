import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import SectionCards from './cardBlog'
import Recipeid from './blogpostid'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Footer from './Footer/Footer.jsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Favorite from '@material-ui/icons/Favorite'
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Parallax from './Parallax/Parallax.jsx'
// sections for this page
import SectionImage from '.././views/BlogPostsPage/Sections/SectionImage.jsx'
import SubscribeLine from '.././views/BlogPostsPage/Sections/SubscribeLine.jsx'
import blogPostsPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx'
// import Tables from './table'
import Header from './header.jsx'
import Tables from './Table'
import axios from 'axios'
import RecipeCard from './recipecard'
import './style.css'
import ButtonAppBar from './searchbar'
import SearchBar from 'material-ui-search-bar'
class DetailProject extends Component {
	state = {
		recipes: [],
		expanded: false
	}

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }))
	}
	componentDidMount() {
		axios
			.get('http://localhost:3030/recipe/showRecipeList')
			.then((response) => {
				this.setState({ recipes: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}

	render() {
		console.log('render', this.state)
		const { classes } = this.props
		const recipeElements = this.state.recipes.map((recipe) => <RecipeCard recipe={recipe} />)

		return (
			<div>
				<Header
					brand="Souhail SOUID"
					links={<HeaderLinks dropdownHoverColor="info" />}
					fixed
					color="transparent"
					changeColorOnScroll={{
						height: 400,
						color: 'dark'
					}}
				/>
				<Parallax image={require('.././assets/img/recipe.jpg')} filter="clear" small>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
								<h2 className={classes.title}>A Place to Share and Discover New Recipes</h2>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				<div> {recipeElements}</div>
				{/* <SearchBar
					value={this.state.value}
					onChange={(newValue) => this.setState({ value: newValue })}
					onRequestSearch={(recipe) => recipes(this.state.value)}
				/> */}
				<SectionImage />
				<ButtonAppBar />
				<SubscribeLine />
				<ButtonAppBar />
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											Creative Tim
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/presentation" className={classes.block}>
											About us
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="//blog.creative-tim.com/" className={classes.block}>
											Blog
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
								&copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{' '}
								by <a href="https://www.creative-tim.com">Creative Tim</a> for a better web.
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(blogPostsPageStyle)(DetailProject)
