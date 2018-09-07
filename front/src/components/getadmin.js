import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import Button from './CustomButtons/Button.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'
import Add from '@material-ui/icons/Add'
import orange from '@material-ui/core/colors/orange'
// import Add from "@material-ui/icons/Add";
// @material-ui/core components
import { Link } from 'react-router-dom'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Footer from './Footer/Footer.jsx'
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Parallax from './Parallax/Parallax.jsx'
// sections for this page

import SectionInterested from '.././views/BlogPostsPage/Sections/SectionInterested.jsx'
import SectionImage from '.././views/BlogPostsPage/Sections/SectionImage.jsx'
import SubscribeLine from '.././views/BlogPostsPage/Sections/SubscribeLine.jsx'
import blogPostsPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx'

// import Tables from './table'
import Header from './header.jsx'
import Tables from './Table'
import axios from 'axios'
import SectionJavascript from './stepper'
import './style.css'

class DetailProjectAdmin extends Component {
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
		const recipeElements = this.state.recipes.map((recipe) => <Tables recipe={recipe} />)

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
				<Parallax image={require('.././assets/img/examples/card-project4.jpg')} filter="clear" small>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
								<h2 className={classes.title}>A place to manage yours posts</h2>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				<div className={classes.main}>
					{/* <Link to={'/formulaire'}>
						<Tooltip
							id="tooltip-right"
							title="Add a new post"
							placement="right"
							classes={{ tooltip: classes.tooltip }}
						>
							<Button
								justIcon
								round
								color="primary"
								style={{ marginLeft: 1200, backgroundColor: orange[400] }}
							>
								<Add />
							</Button>
						</Tooltip>
					</Link> */}
					<SectionJavascript />
					<div className={classes.container}>
						<div>{recipeElements}</div>

						<SectionInterested />
					</div>
					<SectionImage />

					<SubscribeLine />
				</div>
			</div>
		)
	}
}

export default withStyles(blogPostsPageStyle)(DetailProjectAdmin)
